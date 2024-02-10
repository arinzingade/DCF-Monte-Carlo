
from flask import Flask, render_template, url_for, redirect, request
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from os import path
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from flask import flash
import yfinance as yf
import numpy as np

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = "thisisasecretkey"
db = SQLAlchemy(app)
bcrpyt = Bcrypt(app)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(20), nullable = False, unique = True)
    password = db.Column(db.String(80), nullable = False)

class RegisterForm(FlaskForm):
    username = StringField(validators=[InputRequired(), Length(min = 4, max = 20)], render_kw={"placeholder" : "Username"})
    password = PasswordField(validators=[InputRequired(), Length(min = 4, max = 20)], render_kw={"placeholder": "Password"})
    
    submit = SubmitField("Register")
    
    def validate_username(self, username):
        existing_user = User.query.filter_by(username = username.data).first()
        if existing_user:
            raise ValidationError ("The username has been already taken, please take a different username.")

class LoginForm(FlaskForm):
    username = StringField(validators=[InputRequired(), Length(min = 4, max = 20)], render_kw={"placeholder" : "Username"})
    password = PasswordField(validators=[InputRequired(), Length(min = 4, max = 20)], render_kw={"placeholder": "Password"})
    
    submit = SubmitField("Login")

class WaccForm(FlaskForm):
    stock = StringField(validators=[InputRequired(), Length(min = 1, max = 20)], render_kw = {"placeholder" : "Stock Ticker"})
    index = StringField(validators=[InputRequired(), Length(min = 1, max = 20)], render_kw = {"placeholder": "Principal Index"})

class CorrForm(FlaskForm):
    stock1 = StringField(validators=[InputRequired(), Length(min = 1, max = 20)], render_kw = {"placeholder" : "Stock Ticker 1"})
    stock2 = StringField(validators=[InputRequired(), Length(min = 1, max = 20)], render_kw = {"placeholder" : "Stock Ticker 2"})
    
    submit_corr = SubmitField("Calculate the Correlation")

@app.route('/')
def home():
    
    return render_template("home.html")

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

@app.route('/login', methods = ['GET', 'POST'])
def login():
    form_login = LoginForm()
    if form_login.validate_on_submit():
        user = User.query.filter_by(username = form_login.username.data).first()
        if user:
            if bcrpyt.check_password_hash(user.password, form_login.password.data):
                login_user(user)
                return redirect (url_for("dashboard"))
    
    return render_template("login.html", form = form_login)

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    form_signup = RegisterForm()
    
    if form_signup.validate_on_submit():
        existing_user = User.query.filter_by(username = form_signup.username.data).first()
        if existing_user:
            flash("The username has already been taken, please try a new one.", 'error')
        
        else:
            
            hashed_password = bcrpyt.generate_password_hash(form_signup.password.data)
            new_user = User(username = form_signup.username.data, password = hashed_password)
            db.session.add(new_user)
            db.session.commit()
            flash("Successfully Logged In!", 'success')
            return redirect(url_for("login"))
    
    return render_template("register.html", form = form_signup)

@app.route('/dashboard', methods = ['POST', 'GET'])
@login_required
def dashboard():
    return render_template('dashboard.html')    

@app.route('/logout', methods = ['POST', 'GET'])
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))

@app.route('/DiscountedCash', methods = ['POST', 'GET'])
@login_required
def discounted():
    formCorr = CorrForm()
    
    def correlation(x, y):
    
        mean_x = np.mean(x)
        mean_y = np.mean(y)
        p = x - mean_x
        q = y - mean_y

        return np.sum(p*q)/np.sqrt(np.sum(p**2)*np.sum(q**2))
    
    if request.method == 'POST' and formCorr.validate_on_submit():
        stock1_ticker = request.form['stock1'].upper()
        stock2_ticker = request.form['stock2'].upper()
        
        stock1_data = yf.download(stock1_ticker, start = "2020-01-01", end = "2023-01-01")['Adj Close']
        stock2_data = yf.download(stock2_ticker, start = "2020-01-01", end = "2023-01-01")['Adj Close']
        
        stock1_data = np.array(stock1_data)
        stock2_data = np.array(stock2_data)
        
        corr = correlation(stock1_data, stock2_data)
        
        return render_template("disc.html", form = formCorr, correlation_result = corr)
    
    return render_template('disc.html', form = formCorr, correlation_result = None)


if __name__ == '__main__':
    
    with app.app_context():
        db.create_all()
        
    app.run(debug = True)
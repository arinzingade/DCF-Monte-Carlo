
from flask import Flask, render_template, url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, login_user, LoginManager, login_required, logout_user, current_user
from os import path
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from flask_bcrypt import Bcrypt
from flask import flash


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


@app.route('/dashboard', methods = ['POST', 'GET'])
@login_required
def dashboard():
    return render_template('dashboard.html')    

@app.route('/logout', methods = ['POST', 'GET'])
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))


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


if __name__ == '__main__':
    
    with app.app_context():
        db.create_all()
        
    app.run(debug = True)
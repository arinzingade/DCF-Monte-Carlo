
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Discover from './components/Discover'
import { Cards } from './components/Cards'


import Wealth from './components/Wealth'
import Connecting from './components/Connecting'
import Login from './components/Login'



function App() {
  return (
    <>
      <Navbar />
      <Main/>
   <Discover/>
   <Cards/>
   <Wealth wealthNumber='$950,600,750.708'/>
   {/* <Connecting/> */}
   <Login/>
    </>
   
  )
}

export default App

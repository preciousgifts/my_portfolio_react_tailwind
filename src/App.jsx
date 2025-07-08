import './App.css'
import About from './components/About'
import Client from './components/Client'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import NavResp from './components/NavResp'
import Portfolio from './components/Portfolio'

function App() {
 

  return (
    <>
    <Nav/>
    {/* <NavResp/> */}
    <Home/>
    <About/>
    <Portfolio/>
    <Client/>
    <Contact/>

      
    </>
  )
}
 
export default App

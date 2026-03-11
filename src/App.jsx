import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CTA from './Components/CTA'
import FootSection from './Components/FootSection'
import {Header} from './Components/Header'
import { MainSection } from './Components/MainSection'
import SideBar from './Components/SideBar'
import About from './pages/About'
import Home from './pages/Home'
import Process from './pages/Process'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Terms from './pages/Terms'



function App() {
  return (
   <BrowserRouter>
    <Header/>
    <div className='layout'>
    <SideBar/>
    <div className='main'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/process' element={<Process/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/terms' element={<Terms/>}></Route>
      </Routes>
    </div>
    </div>
    <CTA/>
    <FootSection/>
   </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Info from './Components/Info/Info'
import Navbar from './Components/Navbar/Navbar'
import Home  from './Pages/Home'
import Contact  from './Pages/Contacts'
import { About } from './Pages/About'
import { Doctor } from './Pages/Doctor'
import { Service } from './Pages/Services'
import { Footer } from './Pages/Footer'
import { Checkupservice } from './Pages/checkup'
import Appointment from './Pages/Appointment'
import { News } from './Pages/News'
import { SingleNews } from './Pages/singlenews'


function App() {

  return (
    <>
      <Router>
      <Info/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />}   />
          <Route path='/doctors' element={<Doctor />} />
          <Route path='/service' element={<Service />} />
          <Route path='/checkup' element={<Checkupservice />} />
          <Route path='/contacts' element={<Contact/>}/>
          <Route path='/appointments' element={<Appointment/>}/>
          <Route path='/blog' element={<News />}/>
          <Route path='/singleblog' element={<SingleNews />}/>
        </Routes>
      
        
        <Footer />
      </Router>
    </>
  )
}

export default App

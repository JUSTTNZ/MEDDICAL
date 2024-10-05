
import './App.css'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Info from './Components/Info/Info'
import { Footer } from './Pages/Footer'
import { About } from './Pages/About'


function App() {

  return (
    <>
      <Router>
      <Info/>
        <Routes>
        
          <Route path='/about' element={<About />}   />
        </Routes>
      
        
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info from './Components/Info/Info'
import { Footer } from './Pages/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Info/>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

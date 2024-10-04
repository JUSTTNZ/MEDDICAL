import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info from './Components/Info/Info'

function App() {

  return (
    <>
      <BrowserRouter>
        <Info/>
      </BrowserRouter>
    </>
  )
}

export default App

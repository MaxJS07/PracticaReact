import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Button'
import './App.css'

function App() {
  return (
    <>
      <div class="mb-2"> 
        <p class= "text-center">EJERCICIO 1 - COMPONENTES</p>
      </div>
      <div class="gap2">
        <Button text= "Boton 1"/>
        <Button text= "Boton 2"/>
        <Button text= "Boton 3"/>
        <Button text= "Boton 4"/>
        <Button text= "Boton 5"/>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App

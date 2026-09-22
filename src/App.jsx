import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hello from './Hello.jsx'
import Header from './Header.jsx'
import Presentacion from './Presentacion.jsx'
import Perfil from './Perfil.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>

    
    <Presentacion/>

    
    <Perfil/>
    </>
  )
}

export default App

import { Fragment, useState } from 'react'
import './firebase'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/scss/main.scss'
import NavBar from './components/layout/navBar/NavBar'
import { Hero } from './components/HeroSection/Hero'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ApiTest } from './components/ApiTest/ApiTest'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar link1="My work" link2="About" link3="Tools" link4="Contact" />
      <Hero/>
      <ItemListContainer greetting="Holaaaa"/>
      <ApiTest/>
      
    </>
  )
}

export default App

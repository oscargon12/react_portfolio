import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/scss/main.scss'
import NavBar from './components/layout/navBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <NavBar link1="My work" link2="About" link3="Tools" link4="Contact" />
      <ItemListContainer/>
      
    </>
  )
}

export default App

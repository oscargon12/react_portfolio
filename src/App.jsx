import { Fragment, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/scss/main.scss'
import NavBar from './components/layout/navBar/NavBar'
import { Main } from './components/Main/Main'
import { ApiTest } from './components/ApiTest/ApiTest'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <NavBar link1="My work" link2="About" link3="Tools" link4="Contact" link5="poke" />
        {/* <Hero/>
        <ItemListContainer greetting="Holaaaa"/>
        <ApiTest/> */}

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/poke" element={<ApiTest/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

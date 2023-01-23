import React from 'react'
import { Hero } from '../HeroSection/Hero' 
import { About } from '../aboutMe/About'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import '../scss/main.scss'

export const Main = () => {
  return (
    <>
        <div className='mt-4 d-flex align-center'>
            {<Hero/>}
        </div>
        <div className='mt-4'>
            <ItemListContainer/>
        </div>

        {/* TODO:Arreglar esta sección */}
        {<div className='mt-4 d-flex align-center'>
            {<About/>}
        </div>}
    </>
  )
}

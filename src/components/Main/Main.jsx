import React from 'react'
import { Hero } from '../HeroSection/Hero' 
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
    </>
  )
}

import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {

  return (
    <section className='mt-2'>
        {/* <h3> Proyectos listos </h3> */}

        <div className='columns-grid'>
           {items.map((proj) => <Item key={proj.id} proj={proj}/> )}
        </div>
    </section>
  )
}
    
import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {

  return (
    <section>
        <h3> Proyectos listos </h3>

        <div>
           {items.map((proj) => <Item key={proj.id} proj={proj}/> )}
        </div>
    </section>
  )
}
    
import React from 'react'

export const Item = ({proj}) => {
  return (
    <article key={proj.id}>
      <h4>{proj.name}</h4>
      <p>{proj.desc}</p>
    </article>
  )
}

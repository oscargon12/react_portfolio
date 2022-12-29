import React from 'react'

export const Item = ({proj}) => {
  return (
    <article className='primary-font' key={proj.id}>
      <h4>{proj.name}</h4>
      <p>{proj.desc}</p>
      <h5>{proj.likes}</h5>
    </article>
  )
}

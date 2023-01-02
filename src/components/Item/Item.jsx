import React from 'react'

export const Item = ({proj}) => {
  return (
    <article className='primary-font project-card' key={proj.id}>
      <h4>{proj.name}</h4>
      <p>{proj.desc}</p>
      <h5>{proj.likes}</h5>

      <div className='thumbnails'>
        <img src="https://cdna.artstation.com/p/assets/images/images/017/387/624/large/melissa-myra-nocturnal.jpg?1555772159" alt="photo" />
        <div className='overlay'></div>
        <div className='title'>{proj.name}</div>
        <div className='pr-info p1'>
          <h6>{proj.name}</h6>
          <p className='pr-desc'>{proj.desc}</p>
          <h6>{proj.likes}</h6>
        </div>
      </div>
    </article>
  )
}

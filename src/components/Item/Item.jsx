import React from 'react'

export const Item = ({proj}) => {
  return (
    <article className='primary-font project-card' key={proj.id}>

      <div className='thumbnails'>
        <img src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/tern_surge.jpg?alt=media&token=0c77229b-6a65-45ca-80ed-515c01a9ac7e" alt="photo" />
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

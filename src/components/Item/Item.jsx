import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { MdDevices } from 'react-icons/md';

export const Item = ({proj}) => {
  return (
    <article className='primary-font project-card' key={proj.id}>

      <div className='thumbnails'>
        <img src="https://firebasestorage.googleapis.com/v0/b/clase-firebase-1d1eb.appspot.com/o/tern_surge.jpg?alt=media&token=0c77229b-6a65-45ca-80ed-515c01a9ac7e" alt="photo" />
        <div className='overlay'></div>
        <div className='title'>{proj.name}</div>
        {/* Card content */}
        <section className='pr-info p1'>
          <h6>{proj.name}</h6>
          <p className='pr-desc'>{proj.desc}</p>
          <h6>{proj.likes}</h6>
          <p className='pr-tools'>{proj.tools} </p>
          <div>
            <a href={proj.github} target='new' className='txt-secondary mr-1 icon-r mt-1'><BsGithub/></a>
            <a href={proj.link} target='new' className='txt-secondary mr-1 icon-r mt-1'><MdDevices/></a>
          </div>
        </section>
        {/* TODO: Condicional para móviles */}
      </div>
    </article>
  )
}

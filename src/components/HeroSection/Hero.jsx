import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiCodepen } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';

export const Hero = () => {

  let github = 'https://github.com/oscargon12';
  let linkedin = 'https://www.linkedin.com/in/oscar-eduardo-gonzalez-monroy/';
  let codepen = 'https://codepen.io/your-work/?cursor=ZD0wJm89MSZwPTEmdj00NjkwNDg3MA==';
  let twitter = 'https://twitter.com/oscargon12'

  return (
    <main className='w-100'>
        <section className='hero-section align-left primary-font mx-auto mb-4'>
            <h2 className='mt-4'>Hello, I'm Oscar González</h2>
            <h3>I'm a frontend developer</h3>
            <h4 className='fw-400 txt-secondary'>I participate in the creation of projects that are efficient and intiuitive for the user. I'm a hamburguer and science fiction lover</h4>
        </section>
        <section className='hero-section d-flex mx-auto'>
        <a href={github} target='new' className='txt-secondary mr-1 icon-r mt-1'><BsGithub/></a>
        <a href={linkedin} target='new' className='txt-secondary mr-1 icon-r mt-1'><BsLinkedin/></a>
        <a href={codepen} target='new' className='txt-secondary mr-1 icon-r mt-1'><SiCodepen/></a>
        <a href={twitter} target='new' className='txt-secondary mr-1 icon-r mt-1'><BsTwitter/></a>
        
        </section>
    </main>
  )
}

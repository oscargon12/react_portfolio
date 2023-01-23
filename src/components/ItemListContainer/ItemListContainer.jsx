import React, { useEffect, useState } from 'react'
//import { getProjects } from '../../helpers/getData'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import { useParams } from 'react-router-dom'

export const ItemListContainer = (props) => {

  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  //const {catId} = useParams() //for query filter

  console.log(projects);

  useEffect(() => {

    setLoading(true)
    
    //1. armar referencia a la coleccion
    const projectsRef = collection(db, 'projects')
    //const q = catId ? query(projectsRef, where('category', '==', catId)) : projectsRef //Query filter

    //2. GET a esa ref
    getDocs(projectsRef)
      .then((collection) => {
        const items = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setProjects(items)
      })
      .finally(() => [
        setLoading(false)
      ])
  }, [])

  const {greetting} = props
  
  return (
    <>
      <div className='mt-4'>{greetting}</div>
      <section className='container-section mx-auto primary-font'>
        <h3 className='align-left txt-primary'>|<span className='dark-gray fw-500'>OscarGonzalez</span>/Work ~</h3>
        <p className='align-left primary-font mt-1'>Many of the projects that I have worked on, cannot be shown🤷‍♂️. But I just can't stop coding, these are some of my personal projects</p>
      </section>

      {
        loading ? <Loader/>
        
        : <>
           <ItemList items={projects}/>
        </>
      }
    </>
  )
}

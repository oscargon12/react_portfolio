import React, { useEffect, useState } from 'react'
import { getProjects } from '../../helpers/getData'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, doc, getDocs } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'

export const ItemListContainer = (props) => {

  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  console.log(projects);

  useEffect(() => {

    setLoading(true)
    
    //1. armar referencia a la coleccion
    const projectsRef = collection(db, 'projects')

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
      {/* npm install react-icons --save */}

      {
        loading ? <Loader/>
        //TODO: Cambiar titulo por spinner
        : <>
           <ItemList items={projects}/>
        </>
      }
    </>
  )
}

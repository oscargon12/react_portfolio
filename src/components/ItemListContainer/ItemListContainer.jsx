import React, { useEffect, useState } from 'react'
import { getProjects } from '../../helpers/getData'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = (props) => {

  const [loading, setLoading] = useState(false)
  const [projects, setProjects] = useState([])

  console.log(projects);

  useEffect(() => {

    setLoading(true)
    getProjects()
      .then((resp) => {
        setProjects(resp)
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false)
        console.log('llamado finalizado')
      })

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

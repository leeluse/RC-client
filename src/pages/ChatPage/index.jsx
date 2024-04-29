import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const index = () => {
  const { index } = useParams();

  useEffect(() => {
    console.log(index)
  
  }, [])
  

  return (
    <>
    <div>HI {index}</div>
    </>
  )
}

export default index
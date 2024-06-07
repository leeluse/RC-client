import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Item from './Item/Item'
import Nav from '../../components/Nav'
import Edit from '../../components/Edit'

const ProductPage = () => {
  const [showEdit, setShowEdit] = useState(false)
  return (
    <>
      <Nav />
      <div className='h-screen overflow-auto scrollbar-hide\
        font-Pretendard py-36'>
        {!showEdit ? (
        <Item setShowEdit={setShowEdit}/>
        ) : (
        <Edit setShowEdit={setShowEdit}/>
        )}
      </div>
    </>
  )
}

export default ProductPage
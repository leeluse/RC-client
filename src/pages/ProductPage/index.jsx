import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Item from './Item/Item'
import Nav from '../../components/Nav'
import { useEffect } from 'react'

const ProductPage = () => {
  
  return (
    <>
      <Nav />
      <div className='h-screen overflow-auto scrollbar-hide\
        font-Pretendard py-36'>
        <Item />
      </div>
    </>
  )
}

export default ProductPage
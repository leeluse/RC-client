import React, { useEffect, useState } from 'react';
import Item from '../../../components/item';

export function MyItems({ category }) {
  const [product, setProductct] = useState([]);

  useEffect(() => {
    const selectedProduct = () => {
      switch (category) {
        case '관심 항목' :
          return heartProducts
        case '거래 중 항목' :
          return tradingProducts
        default : 
          return myProducts
      }
    }
    
    setProductct(selectedProduct)
  }, [category])



  const myProducts = [
    { name: '나의 게시물 1', price: '90,000원/월', status: '예약 가능', src: 'src/assets/1.png' },
    { name: '나의 게시물 2', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
    { name: '나의 게시물 3', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
  ];

  const heartProducts = [
    { name: '관심 항목1', price: '90,000원/월', status: '예약 가능', src: 'src/assets/1.png' },
    { name: '관심 항목2', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
  ];

  const tradingProducts = [
    { name: '거래 중 항목 2', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
  ];



  return (
    <>
    <div className='flex justify-center'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {product.map((product, index) => (
                  <Item 
                    key={index}
                    name={product.name}
                    price={product.price}
                    status={product.status}
                    src={product.src}
                  />))}
            </div>
      </div>
    </>
  )  
}


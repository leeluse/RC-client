import React, { useEffect, useState } from 'react';
import Item from '../../../components/item';

export function MainItems(  ) {

  const products = [

    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능', src: 'src/assets/1.png' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
    { name: '3 스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중', src: 'src/assets/3.png' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능', src: 'src/assets/4.png' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중', src: 'src/assets/5.png' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중', src: 'src/assets/6.png' },

    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능', src: 'src/assets/1.png' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
    { name: '스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중', src: 'src/assets/3.png' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능', src: 'src/assets/4.png' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중', src: 'src/assets/5.png' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중', src: 'src/assets/6.png' },

    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능', src: 'src/assets/1.png' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
    { name: '스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중', src: 'src/assets/3.png' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능', src: 'src/assets/4.png' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중', src: 'src/assets/5.png' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중', src: 'src/assets/6.png' },

  ];



  return (
    <>
    <div className='flex justify-center'>
        <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {products.map((product, index) => (
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


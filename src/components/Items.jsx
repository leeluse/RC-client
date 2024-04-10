import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Items() {
  const products = [
    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중' },
    { name: '스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중' },

    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중' },
    { name: '스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중' },

    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중' },
    { name: '스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중' },
  ];

  const groupProducts = [];

  for (let i = 0; i < products.length; i += 3){
    groupProducts.push(products.slice(i, i+3));
  }


  return (
    <>
    <div className='overflow-y-auto max-h-[calc(100vh-120)]'>

    </div>
      {groupProducts.map((group, index) => (
        <div key={index} className="flex">
          {group.map((product, index) => (
            <ProductItem 
              key={index}
              name={product.name}
              price={product.price}
              status={product.status}
            />
          ))}
        </div>
      ))}
    </>
  )  
}

function ProductItem({ name, price, status }) {
  const [heart, setHeart] = useState(false)

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [heart])
  
  return (
    <div className='w-2/3 p-2'>
      <div className='flex-col 
       text-start font-[Pretendard] rounded-md border '>
       {/* 상품 이미지 */}
        <img className="w-full h-full " src="https://via.placeholder.com/200x130" />
        <div className='mx-3 my-2'>
          {/* 상품 이름 */}
          <p className='font-bold text-[16px]'>{name}</p>
          <p className='font-medium text-[15px]'>{price}</p>
          {/* 상품 상태 */}
          <div className='flex w-full justify-between items-center'>
          <div className='my-2 flex justify-center w-[85px] gap-2 items-center rounded-2xl 
              border-2 text-slate-700 border-slate-500'>
            <p className="font-bold text-[12px]">{status}</p>
            {/* 예약 가능 상태 */}
            {status == '예약 가능' && (
            <p className="w-3 h-3 rounded-2xl bg-green-300"></p>)}
            {/* 예약 중 상태 */}
            {status == '예약 중' && (
            <p className="w-3 h-3 rounded-2xl bg-amber-500"></p>)}
            {/* 렌탈 중 상태 */}
            {status == '렌탈 중' && (
            <p className="w-3 h-3 rounded-2xl bg-rose-600"></p>)}
          </div>

          {/* 좋아요 기능 */}
          {heart == false ? ( 
            <button onClick={() => {setHeart(true)}}>
              <FaRegHeart className='w-6 h-6'/>
            </button>
            ) : ( 
              <button onClick={() => {setHeart(false)}}>
                <FaHeart className='w-6 h-6'/>
              </button>
              )}
            
          </div>
          </div>
      </div>
      </div>
  );
}

export default Items;

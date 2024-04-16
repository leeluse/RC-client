import React, { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Items() {
  const products = [
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

    { name: '애플 맥북 프로 13인치', price: '90,000원/월', status: '예약 가능', src: 'src/assets/1.png' },
    { name: '전자 킥보드 렌탈', price: '13,000원/일', status: '렌탈 중', src: 'src/assets/2.png' },
    { name: '스쿠버 다이빙 장비', price: '100,000원/주', status: '예약 중', src: 'src/assets/3.png' },
    { name: '캠핑용 텐트', price: '10,000원/주', status: '예약 가능', src: 'src/assets/4.png' },
    { name: '비치 파라솔', price: '5,000원/일', status: '렌탈 중', src: 'src/assets/5.png' },
    { name: '픽셀플라이트 HD 촬영용 드론', price: '50,000원/주', status: '예약 중', src: 'src/assets/6.png' },

  ];

  const groupProducts = [];

  for (let i = 0; i < products.length; i += 3){
    groupProducts.push(products.slice(i, i+3));
  }


  return (
    <>
    <div className='h-full w-full'>
    {groupProducts.map((group, index) => (
        <div key={index} className="flex">
          {group.map((product, index) => (
            <ProductItem 
              key={index}
              name={product.name}
              price={product.price}
              status={product.status}
              src={product.src}
            />
          ))}
        </div>
      ))}
    </div>
      
    </>
  )  
}

function ProductItem({ name, price, status, src }) {
  const [heart, setHeart] = useState(false)

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [heart])
  
  return (
    <div className='w-2/3 p-2 '>
      <div className='flex-col 
       text-start font-Pretendard rounded-md border '>
       {/* 상품 이미지 */}
        <img className="w-full h-full " src={src} />
        <div className='mx-3 my-2'>
          {/* 상품 이름 */}
          <p className='font-bold text-[16px]'>{name}</p>
          <p className='font-medium text-[15px]'>{price}</p>
          
          {/* 상품 상태 */}
          <div className='flex justify-between'>
          <div className='inline-block'>
            <div className='flex items-center gap-2 border-2 px-2
            my-2 justify-center rounded-2xl text-slate-700 border-slate-500'>
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
            </div>

             {/* 좋아요 기능 */}
            {heart == false ? ( 
              <button onClick={() => {setHeart(true)}}>
                <FaRegHeart className='w-6 h-6'/>
              </button>
              ) : ( 
                <button onClick={() => {setHeart(false)}}>
                  <FaHeart className='w-6 h-6 text-red-500'/>
                </button>
                )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;

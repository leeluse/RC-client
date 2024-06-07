import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import axios from 'axios';

const ProductPage = ({  }) => {
  const {productId} = useParams()
  // useLocation을 사용해 값을 주고 받기
  const location = useLocation()
  const { period, name, id, title, content, price, status, src } = location.state || {}
  const navigate = useNavigate()
  const userID = useSelector((state) => state.user.userID)

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [location.state])
  

  const chatHandler = async () => {
    const postUserId = id
    console.log(userID, postUserId, title, "두 사람의 채팅방을 만듭니다")
    try {
      const res = await axios.post("http://localhost:5001/createroom", {
        myid: userID,
        postid: postUserId,
        postTitle:title,
      });
      if(res.status === 200) {
        console.log(res.data)
      }
    } catch (error) {
      console.error()
    }
  }

  return (
    <div className='w-full h-full sm:flex items-center justify-center font-Pretendard'>
      <div 
        className='m-3 shadow-md text-start font-Pretendard rounded-md border-2 '>
       {/* 상품 이미지 */}
       <div className="justify-center flex">
        <img className="w-[350px] h-[350px] object-cover rounded-t-md" src={src} />
       </div>
      </div>
      <div className='flex flex-col max-w-[400px] w-full px-10 '>
        {/* 뒤로 가기 */}
        <div className='flex justify-center items-center'>
        <button
        onClick={() => navigate('/')} 
        className='w-2/3 text-md text-slate-600 font-semibord py-2 border-2
        border-slate-400 rounded-md my-5 '>
          Back To All Products
            </button>
        </div>
          {/* 사용자 이름 */}
          <div className='gap-2 pb-2 text-gray-600 flex items-center'>
          <IoPersonCircleOutline className='h-10 w-10' />
          <span>{name}</span>
          </div>
          <hr className='p-2'/>
          <div className='flex justify-between'>
          <div className='inline-block'>
            <div className='flex items-center gap-2 border-2 px-2
            my-2 justify-center rounded-2xl text-slate-700 border-slate-500'>
             <p className="font-medium text-sm">{status}</p>
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

            </div>
            <div className='text-gray-800 font-bold text-3xl py-2 '>{title}</div>
            {/* 가격 */}
            <span>{price}원/{period}</span>
            {/* 내용 */}
            <span>{content}</span>

            { id !== userID ? (
              <div className='flex justify-center items-center py-10'>
               <button 
                  onClick={chatHandler}
                  className='w-2/3 bg-indigo-400 text-lg text-white font-semibord py-2 border-2 
                  border-indigo-300  rounded-3xl my-10'>
                  채팅하기</button>
              </div>
            ) : (
              <div className='flex justify-center items-center py-10'>
                  <button 
                    onClick={() => navigate(`/edit/${productId}`, {
                      state: {
                        id,
                        name,
                        productId,
                        period,
                        title,
                        content,
                        price,
                        status,
                        src,
                        // bookmark: isBookmarked
                      }
                    })}
                    className='w-2/3 bg-yellow-400 text-lg text-white font-semibord py-2 border-2 
                    border-yellow-300  rounded-3xl my-10'>
                    수정하기
                  </button>
                </div>
            )}
      </div>
    </div>
  )
}

export default ProductPage
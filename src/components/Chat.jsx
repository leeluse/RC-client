import React, { useEffect, } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import 'App.css';
const Chat = ({ showChat, setShowChat }) => {

  useEffect(() => {

  }, [showChat]);

  return (
    <>
      {showChat && (
        <div className=' shadow-lg fixed top-0 right-0 w-1/2 lg:w-1/3 h-screen z-50 bg-white'>
          <button className="p-5" onClick={() => setShowChat(false)}>
          <IoArrowBackOutline className='h-8 w-8'/>
          </button>
          
          {/* 한명 */}
          <div className='m-10 font-[Pretendard] font-bold'>
            <ul>
              <ul className='flex items-end justify-between'>
                <div className='flex items-center gap-5'>
                <li><IoPersonCircleOutline className='w-12 h-12'/></li>
                <div className='flex-row'>
                <li className='text-[20px]'>머훈</li>
                <li className='text-[15px]'>전자 킥보드 렌탈</li>
                </div>
                </div>
                <li>구입 가능한가요?</li>
              </ul>
            </ul>
          </div>

          <div className='m-10 font-[Pretendard] font-bold'>
            <ul>
              <ul className='flex items-end justify-between'>
                <div className='flex items-center gap-5'>
                <li><IoPersonCircleOutline className='w-12 h-12'/></li>
                <div className='flex-row'>
                <li className='text-[20px]'>루스</li>
                <li className='text-[15px]'>스쿠버 장비 렌탈</li>
                </div>
                </div>
                <li>감사합니다!</li>
              </ul>
            </ul>
          </div>

        </div>
      )}
    </>
  );
};

export default Chat;

import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipses  } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import Chat from './Chat';
import { Link, useNavigate } from 'react-router-dom';

const Nav = ({}) => {
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  }, [showChat])


  return (
    <>
    <div className='fixed bg-white min-w-full h-[120px] flex items-center 
      justify-center font-[Pretendard] text-medium shadow-md'>
      <div className='sm:w-2/3 lg:w-2/3 flex items-center justify-between'>
        {/*  홈 로고 */}
        <button onClick={() => {navigate('/')}}>
        <img className="w-40 mx-2" src="src/assets/logo.svg" alt="alert" />
        </button>

        {/*  검색창 */}
        <div className='md:min-w-1/3 w-[400px] mx-5 rounded-md bg-slate-200 flex justify-between lg:mr-[110px]'>
        <input className='w-full outline-none rounded-md text-neutral-500 p-2 bg-slate-200' placeholder='Search Here'/>
        <button className="min-w-[40px] flex items-center justify-center">
          <img src="src/assets/search.svg" alt="" style={{ width: '20px', height: '20px' }} /> {/* 아이콘 크기 지정 */}
        </button>
      </div>

        <div className='flex w-20 gap-3'>
          {/* 알림 */}
          <div className='flex items-center'>
            <button onClick={() => {setShowChat(true)}}>
            <IoChatbubbleEllipses className='w-8 h-8'/>
            </button>
          </div>
          {/* 마이페이지 */}
          <div className='flex items-center '>
          <Link to='my-page' >
          <IoPersonCircleSharp className='w-10 h-10'/>
          </Link>
          </div>
        </div>
      </div>
    </div>
    <Chat showChat={showChat} setShowChat={setShowChat} />
    </>
  )
}

export default Nav
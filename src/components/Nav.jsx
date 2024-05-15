import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipses  } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import Chat from './Chat';
import {  useNavigate } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { store } from '../reducer/store';
import persistStore from 'redux-persist/es/persistStore';

const Nav = ({}) => {
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const persistor = persistStore(store);

  const signoutHandler = () => {
    persistor.purge();
    navigate('/sign-in');
  }


  useEffect(() => {
  }, [showChat])


  return (
    <>
    <div className='fixed bg-white min-w-full h-[120px] flex items-center 
      justify-center font-[Pretendard] text-medium shadow-md'>
      <div className='sm:w-4/5 md:w-2/3 lg:w-2/3 flex items-center justify-between px-2'>
        
        <div className='w-full flex justify-start'>
        {/*  홈 로고 */}
        <button onClick={() => {navigate('/')}}>
        <img className="sm:w-24 md:w-35 lg:w-40 lg:mx-2" src="src/assets/logo.svg" alt="alert" />
        </button>
        </div>
        



        <div className='w-full'>
        {/*  검색창 */}
        <div className='rounded-md bg-slate-200 flex pr-2'>
        <input className='w-full outline-none rounded-md text-neutral-500 p-2 bg-slate-200' placeholder='Search Here'/>
        <button className="flex items-center justify-center">
          <img src="src/assets/search.svg" alt="" style={{ width: '20px', height: '20px' }} /> {/* 아이콘 크기 지정 */}
            </button>
          </div>
        </div>
        
        <div className='w-full flex justify-end items-center sm:gap-1 lg:gap-3'>
            <IoChatbubbleEllipses onClick={() => {setShowChat(true)}} className='w-9 h-9 cursor-pointer'/>
            <IoPersonCircleSharp  onClick={() => {navigate('/my-page')}} className='w-10 h-10 cursor-pointer'/>
            <IoLogOut onClick={signoutHandler} className='w-11 h-11 cursor-pointer'/>
          </div>
        
      </div>
    </div>
    <Chat showChat={showChat} setShowChat={setShowChat} />
    </>
  )
}

export default Nav
import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipses  } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import Chat from './Chat';
import {  useNavigate } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { store } from '../reducer/store';
import persistStore from 'redux-persist/es/persistStore';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../reducer/user';
import { useCookies } from 'react-cookie';

const Nav = ({}) => {
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const persistor = persistStore(store);
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch()
  const [token, setToken] = useState(accessToken)


  const mypageHandler = async () => {
    console.log(accessToken)

    if (!accessToken) {
      alert("로그인을 시도해 주세요");
      navigate("/sign-in")
    } else {
      try {
        let res = await axios.get('http://localhost:5001/signin/protected-route', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        
        if (res.status === 401) { // 만료된 토큰 처리
          console.log("토큰이 만료되었습니다")
          const newToken = await refreshAccessToken();
          
          res = await axios.get('http://localhost:5001/signin/protected-route', {
            headers: {
              'Authorization': `Bearer ${newToken}`
            }
          });
        } else {
          console.log(res.data)
        }
  
        navigate('/my-page'); // 보호된 라우트 접근 성공 시 페이지 이동
  
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

    const refreshAccessToken = async () => {
      try {
        const res = await axios.post('http://localhost:5001/signin/token', {}, {
          withCredentials: true // 쿠키를 포함하여 요청
        });
        dispatch(setAccessToken(res.data.accessToken));
        return res.data.accessToken
      } catch (error) {
        console.error();
      }
    }



  const signoutHandler = async () => {
    try {
    const res = await axios.get("http://localhost:5001/signin/logout" , {
      withCredentials: true // 쿠키를 포함하여 요청
    })
    alert("쿠키 삭제 완료!")
    // redux-persist store 내의 데이터 삭제
    persistor.purge();
    navigate('/sign-in');
    } catch (error) {
      console.error()
    }
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
            {/* 마이페이지 이동 */}
            <IoPersonCircleSharp  onClick={mypageHandler} className='w-10 h-10 cursor-pointer'/>
            <IoLogOut onClick={signoutHandler} className='w-11 h-11 cursor-pointer'/>
          </div>
        
      </div>
    </div>
    <Chat showChat={showChat} setShowChat={setShowChat} />
    </>
  )
}

export default Nav
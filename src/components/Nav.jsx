import React, { useEffect, useState } from 'react'
import { IoChatbubbleEllipses  } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import Chat from './Chat/Chat';
import {  useNavigate } from 'react-router-dom';
import { IoLogOut } from "react-icons/io5";
import { store } from '../reducer/store';
import persistStore from 'redux-persist/es/persistStore';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken } from '../reducer/user';

const Nav = ({}) => {
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const persistor = persistStore(store);
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch()
  const [chatData, setChatData] = useState([])
  const userID = useSelector((state) => state.user.userID);

  const getList = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/getlistroom/${userID}`);
      if(res.status === 200){
        setChatData(res.data)
        console.log(res.data)
      }
    setShowChat(true)
    } catch (error) {
      const { status, data } = error.response;
      if (status === 500) {
        console.log(data.msg);
      }
    }
  }




  const mypageHandler = async () => {
    if(!accessToken) {
      // 로그인 확인
      alert("로그인 후 이용 가능합니다")
      navigate('/sign-in')
    } else {
      try {
        let res = await axios.get('http://localhost:5001/signin/protected-route', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        navigate('/my-page'); // 보호된 라우트 접근 성공 시 페이지 이동
      } catch (error) {
        const { status, data } = error.response;
        if(error.response) {
          if(status == 401) {
            alert("토큰을 재발급합니다.")
            const newToken = await refreshAccessToken();

            // 토큰이 성공적으로 갱신되었을 때 실행
            if (newToken) {
              res = await axios.get('http://localhost:5001/signin/protected-route', {
                headers: {
                  'Authorization': `Bearer ${newToken}`
                }
              });
              navigate('/my-page'); // 보호된 라우트 접근 성공 시 페이지 이동
            } else {
              console.log("토큰 갱신에 실패했습니다");
            }
          } else {
            console.log(error.response.message)            
          }
        }
      }
    }
  }

    const refreshAccessToken = async () => {
      try {
        const res = await axios.get('http://localhost:5001/signin/token', {
          withCredentials: true // 쿠키를 포함하여 요청
        });
        dispatch(setAccessToken(res.data.accessToken));
        return res.data.accessToken
      } catch (error) {
        const { status, data } = error.response;
        if(error.response) {
          if(status === 401) {
            alert("토큰이 만료되었습니다. 다시 로그인해 주세요.")
            navigate('/sign-in')
          } else if(status === 403) {
            alert("토큰이 유효하지 않습니다. 다시 로그인해 주세요.")
            navigate('/sign-in')
          }
        }
      }
    }



  const signoutHandler = async () => {
    try {
    const res = await axios.get("http://localhost:5001/signin/logout" , {
      withCredentials: true // 쿠키를 포함하여 요청
    })
    alert("쿠키 삭제 완료!", res)
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
      <div className='sm:w-4/5 md:w-2/3 lg:w-2/3 flex items-center justify-between px-full'>
        
        <div className='w-full flex justify-start'>
        {/*  홈 로고 */}
        <button onClick={() => {navigate('/')}}>
        <img className="h-16" src="/src/assets/logo.svg" alt="alert" />
        </button>
        </div>
        <div className='w-full'>
        {/*  검색창 */}
        <div className='rounded-md bg-slate-200 flex pr-2'>
        <input className='w-full outline-none rounded-md text-neutral-500 p-2 bg-slate-200' placeholder='Search Here'/>
        <button className="flex items-center justify-center">
          <img src="/src/assets/search.svg" alt="" style={{ width: '20px', height: '20px' }} /> {/* 아이콘 크기 지정 */}
            </button>
          </div>
        </div>
        
        <div className='w-full flex justify-end items-center sm:gap-1 lg:gap-3'>
            <IoChatbubbleEllipses onClick={getList} className='w-9 h-9 cursor-pointer'/>
            {/* 마이페이지 이동 */}
            <IoPersonCircleSharp  onClick={mypageHandler} className='w-10 h-10 cursor-pointer'/>
            <IoLogOut onClick={signoutHandler} className='w-11 h-11 cursor-pointer'/>
          </div>
        
      </div>
    </div>
    <Chat showChat={showChat} chatData={chatData} setShowChat={setShowChat} />
    </>
  )
}

export default Nav;
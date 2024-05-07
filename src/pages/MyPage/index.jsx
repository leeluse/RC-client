import React, { useEffect } from 'react'
import { removeToken } from '../../reducer/user';
import { useDispatch, useSelector } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { store } from '../../reducer/store';
import { useNavigate } from 'react-router-dom';
import Post from '../../components/Post';

const MyPage = () => {
  const persistor = persistStore(store)
  const nav = useNavigate()
  const signoutHandler = () => {
    persistor.purge()
    nav('/sign-in')
  }

  

  return (
    <>
    <div>
      <Post />
      <button 
        onClick={signoutHandler}
        className='border-2 border-slate-500 flex rounded-lg 
      font-Pretendard text-center text-[50px] '>
        로그아웃</button>
    </div>
    </>
  )
}

export default MyPage
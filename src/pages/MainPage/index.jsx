import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import LoginPage from '../LoginPage/index'
import { useSelector } from 'react-redux';
import { MainItems } from './items/MainItems';

const MainPage = () => {
  // useSelector로 store의 user state에 접근
  const userID = useSelector((state) => state.user.userID);

  useEffect(() => {

    return () => {
    }
  }, [userID])
  

  return (
  <>
    {userID === null? (<LoginPage />) : (
    <>
      <Nav />
      <div className='h-screen overflow-auto scrollbar-hide py-36'>
        <MainItems />
      </div>
      </>

    )}
    </>
  );
};

export default MainPage;

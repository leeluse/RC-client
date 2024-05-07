import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Items from '../../components/Items';
import LoginPage from '../LoginPage/index'
import { useSelector } from 'react-redux';

const MainPage = () => {
  // useSelector로 store의 user state에 접근
  const userToken = useSelector((state) => state.user.user.userToken);

  useEffect(() => {

    return () => {
    }
  }, [userToken])
  

  return (
    <>
    {userToken === null? (<LoginPage />) : 
    ( <>
      <Nav />
      <Items />
      </>)}
      </>
  );
};

export default MainPage;

import React, { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import { MainItems } from './items/MainItems';

const MainPage = () => {
 
  useEffect(() => {
    return () => {
    }
  }, [])
  

  return (
  <>
    <>
      <Nav />
      <div className='h-screen overflow-auto scrollbar-hide py-36'>
        <MainItems />
      </div>
      </>
    </>
  );
};

export default MainPage;

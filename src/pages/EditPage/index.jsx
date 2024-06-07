import React, { useEffect } from 'react'
import Edit from '../../components/Edit';
import Nav from '../../components/Nav';

const EditPage = () => {
  useEffect(() => {
    return () => {
    }
  }, [])
  

  return (
  <>
    <>
      <Nav />
      <div className='h-screen overflow-auto 
      font-Pretendard scrollbar-hide py-36'>
        <Edit />
      </div>
      </>
    </>
  );
};

export default EditPage
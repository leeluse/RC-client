import React, { useEffect, useState } from 'react';
import persistStore from 'redux-persist/es/persistStore';
import { store } from '../../reducer/store';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import { MyItems } from './items/MyItems';
import Post from '../../components/Post';

const MyPage = () => {
  const [category, setCategory] = useState('나의 게시물');
  const [showPost, setShowPost] = useState(false);


  const list = [
    '나의 게시물', '관심 항목', '거래 중 항목'
  ];

  return (
    <>
      <Nav />
      <div className='font-Pretendard py-36 h-screen flex items-center justify-center'>
        <div className='h-full sm:flex-row md:flex-row lg:flex  '>
          {!showPost ? (
            <>
              {/* 게시물 카테고리 */}
              <div className='flex sm:flex-row lg:flex-col justify-center lg:justify-start lg:mr-16 lg:pl-10'>
                <ul className=' flex sm:flex-row md:flex-row lg:flex-col items-center gap-4 lg:gap-8 lg:my-36'>
                  {list.map((item, index) => (
                    <li key={index} >
                      {/* 카테고리 변경 */}
                      <button
                        onClick={() => { setCategory(item) }}
                        className={`w-28 h-12 lg:w-36 flex items-center justify-center border rounded-lg lg:py-2
                            ${item === category ? 'bg-indigo-400 text-white' : 'font-bold bg-white text-black-400'}
                            `}>
                        <p className='lg:text-lg'>{item}</p>
                      </button>
                    </li>
                  ))}
                </ul>
               
              </div>
              {/* 물품 목록 */}
              <div className='my-10 lg:pr-20'>
                <div className='sm:mx-12 md:mx-4 lg:m-3 flex justify-between'>
                  <p className='text-[25px] lg:text-[28px] font-bold '>{category}</p>
                  {/* 게시글 등록 버튼 */}
                  <button
                    onClick={() => setShowPost(true)}
                    className='border justify-end rounded-lg px-2 lg:px-4 font-semibold lg:text-md'>게시글 등록</button>
                </div>
                <div className='my-4'>
                  <MyItems category={category} />
                </div>
              </div>
            </>
          ) : (
            <Post setShowPost={setShowPost} />
          )}
        </div>
      </div>
    </>
  )
}

export default MyPage;

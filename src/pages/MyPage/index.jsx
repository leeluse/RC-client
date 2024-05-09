import React, { useEffect, useState } from 'react'
import persistStore from 'redux-persist/es/persistStore';
import { store } from '../../reducer/store';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';
import { MyItems } from './items/MyItems';

const MyPage = () => {
  const persistor = persistStore(store)
  const nav = useNavigate()
  const [category, setCategory] = useState('나의 게시물')

   const signoutHandler = () => {
     persistor.purge()
     nav('/sign-in')
   }

  useEffect(() => {

  }, [category])
  
  const list = [
    '나의 게시물', '관심 항목', '거래 중 항목'
  ]

  return (
    <>
    <Nav />
      <div className='font-Pretendard py-36 h-screen '>
         {/* 게시물 카테고리 */}
        <div className='h-full flex justify-start px-10 '>
          {/* 게시물 리스트 버튼 그룹 */}
          <ul className='w-1/4 p-20 flex flex-col items-center gap-8 py-36'>
            {list.map((item, index) => (
              <li key={index} >
                <button
                onClick={() => {setCategory(item)}}
                className={`w-36 flex items-center justify-center border rounded-lg py-2
                ${item === category? 'bg-indigo-400 text-white' : 'font-bold bg-white text-black-400'}
                `}>
                  <p className='text-[20px]'>{item}</p>
                </button>
              </li>
            ))}
          </ul>

            {/* 물품 목록 */}
            <div className='my-10'>
              <div className='flex justify-between'>
              <p className='m-4 text-[32px] font-bold'>{category}</p>
              <button className='my-4 border justify-end rounded-lg px-4 font-semibold text-[18px]'>게시글 등록</button>
              </div>
              <div className='my-4'>
              <MyItems category={category}/>
              </div>
          </div>

        </div>


         <button 
          onClick={signoutHandler}
          className='border-2 border-slate-500 flex rounded-lg 
          font-Pretendard text-center text-[23px] '>
          로그아웃
        </button> 
    </div>
    </>
  )
}

export default MyPage
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Post = ( {setShowPost} ) => {
  let [img, setImg] = useState("");

  const setPreviewing = (e) => {
  }
  
  const [data, setData] = useState({
      id: '',
      title: '',
      content: '',
      image: '',
  })
  
  useEffect(() => {
  
    return () => {
      
    }
  }, [])
  

  const postHandler = async () => {
    setShowPost(false)
   try {
    const res = await axios.post('http://localhost:5001/posts', data);
     console.log(res.data);
   } catch (error) {
      console.error(error);
   }

  }
  return (
    <>
    {/* 게시물 카테고리 */}
    <div className='w-full h-full flex justify-center items-center'>
      <div className='h-1/4 w-1/4 rounded-md bg-slate-200'>
      </div>
      <div className='m-10 flex-col flex justify-center items-center'>
        <div>
        {/* 제목 */}
        <p className='text-[16px] font-bold '>제목</p>
            <input 
                className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
                type="title" />

           {/* 금액 */}
        <p className='text-[16px] font-bold '>금액</p>
            <input 
                className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
                type="title" />
        {/* 주/일/월 */}
        <p className='text-[16px] font-bold '>주/일/월</p>
                    <input 
                        className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
                        type="title" />
        
        {/* 내용 */}
        <p className='text-[16px] font-bold '>내용</p>
                    <input 
                        className="resize-none w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
                        type="text" />
        </div>
       
      <button 
          onClick={postHandler}
          className='border-2 rounded-md border-black py-2 px-8'>
            등록하기</button>
        </div>
    </div>
   </>
  
      

)
}

export default Post
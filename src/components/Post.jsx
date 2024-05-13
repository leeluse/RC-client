import axios from 'axios'
import React from 'react'

const Post = () => {
  const data = {
    id: 'test1234',
    title: 'title1',
    content: "title1's content",
    image: "title1's image",
  }
  console.log(data)
  const postHandler = async () => {
   try {
    const res = await axios.post('http://localhost:5001/posts', data);
     console.log(res.data);
   } catch (error) {
      console.error(error);
   }

  }
  return (
  <>
  <p className='text-start text-[16px] font-bold'>Password Confirm</p>
          <input 
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Check Your Password' 
              type="title" />
  <p className='text-start text-[16px] font-bold'>Password Confirm</p>
          <input 
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Check Your Password' 
              type="image" />
  <p className='text-start text-[16px] font-bold'>Password Confirm</p>
          <input 
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Check Your Password' 
              type="content" />
  <button 
        onClick={postHandler}
        className='border-2 border-black'>
          등록하기</button>
  </>
      

)
}

export default Post
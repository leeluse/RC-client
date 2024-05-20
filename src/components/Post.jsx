import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { MdAddPhotoAlternate } from "react-icons/md";
import { useSelector } from 'react-redux';

const Post = ( { setShowPost } ) => {
  const imageInput = useRef()
    // useSelector로 store의 user state에 접근
  const userID = useSelector((state) => state.user.userID)

  const [imageData, setImageData] = useState({
    file: null,
    thumbnail: null,
    type: null
  });


  const [data, setData] = useState({
    userID: userID,
    title: '',
    amount: '',
    period: '',
    content: '',
})



  // useRef를 사용하기 위한 Handler
  const clickHandler = () => {
   imageInput.current.click()
  }

  // fileUpload Handler
  const fileUploader = (e) => {
    const file = e.target.files?.[0]; // FileList의 File
    const url = URL.createObjectURL(file); // url로 생성하기
    if (file) {
      try {
        // 이미지 데이터 업데이트
      const newImageData = {
        file: file,
        thumbnail: url,
        type: file.type.slice(0, 5), 
      };

       // 이미지 데이터 업데이트 후 setData 호출
       setData({ ...data});
       setImageData(newImageData);

      } catch (imageData) {
        console.log("실패")
      }
    }
  }
  


  const postHandler = async () => {
    console.log(imageData)
    const formData = new FormData()
    formData.append("user", data.userID);
    formData.append("title", data.title);
    formData.append("amount", data.amount);
    formData.append("period", data.period);
    formData.append("content", data.content);
    if (imageData.file) {
      formData.append("postImage", imageData.file);
    }

    // 폼 확인
    console.log(formData)


    setShowPost(false)
   try {
    const res = await axios.post('http://localhost:5001/posts', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    console.log(res.data);
   } catch (error) {
      console.error(error);
   }
  }



  return (
    <>
    {/* 게시물 카테고리 */}
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        {/* 게시물 등록하기 제목 */}
      <h1 className='text-left h-full w-full font-extrabold text-3xl'>게시물 등록하기</h1>
        <form className='w-full h-full lg:flex justify-center items-center '>
          <div className='flex flex-col justify-center items-center py-5 lg:py-10'>
            
            <div className='space-y-10 '>
                {/* useRef를 사용하기 위한 handler */}
                {imageData.thumbnail == null ? (
              <div className='flex justify-center items-center rounded-md  w-40 h-40 lg:h-60 lg:w-60 border-2 shadow-xl border-slate-400'>
                  <MdAddPhotoAlternate 
                    onClick={clickHandler}
                    className='text-slate-800 h-12 w-12 lg:h-20 cursor-pointer'/>
              </div>
                ) : (
                  <div className='flex  rounded-md order-2 w-40 h-40 lg:h-60 lg:w-60 shadow-xl border-slate-400'>
                  <img onClick={clickHandler} className='rounded-md cursor-pointer object-cover' src={`${imageData.thumbnail}`} alt='thumbnail' />   
                  </div>
                )}
                {/* useRef를 사용하여 input을 버튼에서 사용 */}
                <input type="file"
                      //  multiple 여러 개의 사진을 넣을 경우 사용
                       className='hidden'
                       accept='image/*' 
                       onChange={fileUploader} 
                       ref={imageInput}/>
            </div>
          </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='space-y-5 lg:space-y-10 p-5 lg:p-10'>
          {/* 제목 */}
              <div>
              <span className='text-lg mr-2 font-bold text-slate-700'>제목</span>
              <input 
                onChange={(e) => setData({...data, title: e.target.value})}
                type="text"
                placeholder='제목을 입력하세요'
                className='border rounded-md px-4 py-1' />
              </div>
          {/* 금액 */}
              <div>
              <span className='text-lg mr-2 font-bold text-slate-700'>금액</span>
              <input 
                onChange={(e) => setData({...data, amount: e.target.value})}
                type="text"
                placeholder='금액을 입력하세요'
                className='border rounded-md px-4 py-1' />
              </div>
          {/* 주 / 일 / 월 */}
              <div>
              <span className='text-lg mr-2 font-bold text-slate-700'>기간</span>
              <input 
                onChange={(e) => setData({...data, period: e.target.value})}
                type="text"
                placeholder='주 / 일 / 월'
                className='border rounded-md px-4 py-1' />
              </div>
          {/* 내용 */}
              <div>
              <span className='text-lg mr-2 font-bold text-slate-700'>내용</span>
              <input 
                onChange={(e) => setData({...data, content: e.target.value})}
                type="text"
                placeholder='내용을 입력하세요'
                className='border rounded-md px-4 py-1' />
              </div>
           
          </div>
          <div>
          <button 
          onClick={postHandler}
          className='border-2 rounded-md text-slate-500 border-slate-500 color-slate-500 py-2 px-8'>
            등록하기</button>
          </div>
        </div>
      </form>
      </div>
     
      
    </div>
   </>
  
      

)
}

export default Post
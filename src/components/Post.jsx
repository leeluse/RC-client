import axios from 'axios';
import React, { useRef, useState } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import { useSelector } from 'react-redux';

const Post = ({ setShowPost }) => {
  const imageInput = useRef();
  const [dropdown, setDropdown] = useState(false);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  }

  // Obtain userID from Redux state
  const userID = useSelector((state) => state.user.userID);

  const [amountValue, setAmountValue] = useState('');
  const [periodValue, setPeriodValue] = useState('');
  const [period, setPeriod] = useState('일/주/월');

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
  });

  const clickHandler = () => {
    imageInput.current.click();
  }

  const fileUploader = (e) => {
    const file = e.target.files?.[0];
    const url = URL.createObjectURL(file);
    if (file) {
      try {
        const newImageData = {
          file: file,
          thumbnail: url,
          type: file.type.slice(0, 5),
        };

        setData({ ...data });
        setImageData(newImageData);

      } catch (error) {
        console.log("Image upload failed");
      }
    }
  }

  const periodHandler = (e) => {
    setPeriod(e);
    setData({ ...data, period: periodValue + e });
    console.log(periodValue + e);
  }

  const amountHandler = (e) => {
    const formattedValue = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmountValue(formattedValue);
    setData({ ...data, amount: formattedValue });
  };

  const postHandler = async () => {
    // Check userID before sending the request
    if (!userID) {
      console.error("UserID is missing or invalid");
      return;
    }

    console.log("userID before post request:", userID);

    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("title", data.title);
    formData.append("amount", data.amount);
    formData.append("period", data.period);
    formData.append("content", data.content);
    formData.append("status", "예약 가능");
    if (imageData.file) {
      formData.append("postImage", imageData.file);
    }

    setShowPost(false);
    try {
      const res = await axios.post('http://localhost:5001/posts', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error posting data:", error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-left h-full w-full font-extrabold text-3xl'>게시물 등록하기</h1>
        <form className='w-full h-full lg:flex justify-center items-center '>
          <div className='flex flex-col justify-center items-center py-5 lg:py-10'>
            <div className='space-y-10 '>
              {imageData.thumbnail == null ? (
                <div className='flex justify-center items-center rounded-md  w-40 h-40 lg:h-60 lg:w-60 border-2 shadow-xl border-slate-400'>
                  <MdAddPhotoAlternate 
                    onClick={clickHandler}
                    className='text-slate-800 h-12 w-12 lg:h-20 cursor-pointer '/>
                </div>
              ) : (
                <div className='flex rounded-md order-2 w-40 h-40 lg:h-60 lg:w-60 shadow-xl border-slate-400'>
                  <img onClick={clickHandler} className='w-full h-full rounded-md cursor-pointer object-cover' src={`${imageData.thumbnail}`} alt='thumbnail' />   
                </div>
              )}
              <input type="file"
                className='hidden'
                accept='image/*' 
                onChange={fileUploader} 
                ref={imageInput}/>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='space-y-5 lg:space-y-10 p-5 lg:p-10'>
              <div>
                <span className='text-lg mr-2 font-bold text-slate-700'>제목</span>
                <input 
                  onChange={(e) => setData({...data, title: e.target.value})}
                  type="text"
                  placeholder='제목을 입력하세요'
                  className='border rounded-md px-4 py-1' />
              </div>
              <div>
                <span className='text-lg mr-2 font-bold text-slate-700'>금액</span>
                <input 
                  onChange={amountHandler}
                  value={amountValue}
                  type="text"
                  placeholder='금액을 입력하세요'
                  className='border rounded-md px-4 py-1' />
              </div>
              <div className='flex items-center'>
                <span className='text-lg mr-2 font-bold text-slate-700'>기간</span>
                <input
                  onChange={(e) => setPeriodValue(e.target.value)}
                  className='w-20 mr-2 border rounded-md px-4 py-1'
                />
                <div
                  onClick={dropdownHandler}
                  className='border flex justify-center cursor-pointer rounded-md px-4 py-1 bg-slate-400 text-white relative'>
                  <p>{period}</p>
                  {dropdown && (
                    <div className='rounded-md p-1 top-9 absolute border-2 bg-white text-slate-400 flex flex-col w-full'>
                      <p onClick={() => periodHandler("일")}>일</p>
                      <p onClick={() => periodHandler("주")}>주</p>
                      <p onClick={() => periodHandler("개월")}>개월</p>
                    </div>
                  )}
                </div>
              </div>
              <div className='w-full flex items-center'>
                <span className='w-auto text-lg mr-2 font-bold text-slate-700'>내용</span>
                <textarea 
                  onChange={(e) => setData({...data, content: e.target.value})}
                  type="text"
                  placeholder='내용을 입력하세요'
                  maxLength="100"
                  className='border flex-grow resize-none break-all rounded-md px-4 py-1' />
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
  );
}

export default Post;
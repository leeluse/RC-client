import axios from 'axios';
import React, { useRef, useState } from 'react';
import { MdAddPhotoAlternate } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Edit = ({  }) => {
  const { productId } = useParams();
  const imageInput = useRef();
  const location = useLocation();
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate()
  const { name, id, title, content, price, status, src } = location.state || {};
  const initPeriod = location.state.period;

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  }

  // Obtain userID from Redux state
  const userID = useSelector((state) => state.user.userID);

  const [amountValue, setAmountValue] = useState(price);
  const [periodValue, setPeriodValue] = useState(initPeriod);
  const [period, setPeriod] = useState('일/주/월');

  const [imageData, setImageData] = useState({
    file: null,
    thumbnail: src || null,
    type: null,
  });

  const [data, setData] = useState({
    userID: userID,
    title: title,
    amount: amountValue,
    period: periodValue,
    content: content,
    obj: productId
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
  }

  const amountHandler = (e) => {
    const formattedValue = e.target.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setAmountValue(formattedValue);
    setData({ ...data, amount: formattedValue });
  };

  const deleteHandler = async (e) => {
    e.preventDefault(); // 기본 동작 막기
    try {
      const res = await axios.post(`http://localhost:5001/deletepost/${productId}`, {
        userID: userID,
        productId: productId
      } 
      );
      if(res.status === 200) {
        console.log(res.data);
        navigate('/')
        // navigate(`/products/${productId}`)
      }
    } catch (error) {
      console.error("Error posting data:", error.response ? error.response.data : error.message);
    }
  }

  const editHandler = async (e) => {
    e.preventDefault(); // 기본 동작 막기
    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("title", data.title);
    formData.append("amount", data.amount);
    formData.append("period", data.period);
    formData.append("content", data.content);
    formData.append("obj", productId); // Ensure productId is included
  
    if (imageData.file) {
      formData.append("postImage", imageData.file);
    }
    try {
      const res = await axios.post(`http://localhost:5001/editpost/${productId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if(res.status === 200) {
        console.log(res.data);
        navigate('/')
        // navigate(`/products/${productId}`)
      }
    } catch (error) {
      console.error("Error posting data:", error.response ? error.response.data : error.message);
    }
  }
  

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-left h-full w-full font-extrabold text-3xl'>게시물 수정하기</h1>
        <form className='w-full h-full lg:flex justify-center items-center '>
          <div className='flex flex-col justify-center items-center py-5 lg:py-10'>
            <div className='space-y-10 '>
              {imageData.thumbnail == null ? (
                <div className='flex justify-center items-center rounded-md  w-40 h-40 lg:h-60 lg:w-60 border-2 shadow-xl border-slate-400'>
                  <MdAddPhotoAlternate 
                    onClick={clickHandler}
                    className='text-slate-800 h-12 w-12 lg:h-20 cursor-pointer'/>
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
                  value={data.title}
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
                  value={periodValue}
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
              <div className='w-full flex items-center '>
                <span className='w-auto text-lg mr-2 font-bold text-slate-700'>내용</span>
                <textarea 
                  onChange={(e) => setData({...data, content: e.target.value})}
                  type="text"
                  value={data.content}
                  placeholder='내용을 입력하세요'
                  maxLength="100"
                  className='border flex-grow resize-none break-all rounded-md px-4 py-1' />
              </div>
            </div>
            <div className=''>
              <button 
                onClick={editHandler}
                className='border-2 mr-2 rounded-md text-slate-500 border-slate-500 color-slate-500 py-2 px-8'>
                수정하기</button>
                <button 
                onClick={deleteHandler}
                className='border-2 rounded-md text-slate-500 border-slate-500 color-slate-500 py-2 px-8'>
                삭제</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;

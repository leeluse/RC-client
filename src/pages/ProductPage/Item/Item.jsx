// Item 컴포넌트
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { FaSpinner } from "react-icons/fa";
import ChatMain from '../../../components/Chat/ChatMain';

const Item = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const userID = useSelector((state) => state.user.userID);
  const [showChat, setShowChat] = useState(false);

  const getProducts = async () => {
    try {
      const res = await axios.post(`http://localhost:5001/posts/${productId}`, { productId });
      if (res.status === 200) {
        const fetchedProduct = res.data;
        setProduct({
          ...fetchedProduct,
          status: fetchedProduct.status ? fetchedProduct.status : "예약 가능"
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

 
  useEffect(() => {
    getProducts();
  }, [productId]);




  const chatHandler = async () => {
    const postUserId = product.userID;
    try {
      const res = await axios.post("http://localhost:5001/createroom", {
        myid: userID,
        postid: postUserId,
        postTitle: product.postTitle,
      });
      if(res.status === 200) {
        console.log(res)
        alert("채팅방이 성공적으로 생성되었습니다.")
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  if (!product) {
    return (
      <div className='relative flex items-center justify-center top-80'>
        <div className='flex items-center gap-2 justify-center rounded-lg px-5 py-2 text-white bg-indigo-500'>
          <FaSpinner className='animate-spin' />
          <p className="text-lg shadow-sm" disabled>Processing...</p>
        </div>
      </div>
    );
  }

  let imageSrc = '';
  if (product.postImage && product.postImage.data) {
    const imageData = product.postImage.data.data;
    const base64Image = arrayBufferToBase64(imageData);
    imageSrc = `data:image/${product.postImage.contentType};base64,${base64Image}`;
  }

  return (
    <div className='w-full h-full sm:flex items-center justify-center font-Pretendard'>
      <div className='m-3 shadow-md text-start font-Pretendard rounded-md border-2'>
        {/* 상품 이미지 */}
        <div className="justify-center flex">
          <img className="w-[350px] h-[350px] object-cover rounded-t-md" src={imageSrc} alt="Product" />
        </div>
      </div>
      <div className='flex flex-col max-w-[400px] w-full px-10 '>
        {/* 뒤로 가기 */}
        <div className='flex justify-center items-center'>
          <button
            onClick={() => navigate('/')}
            className='w-2/3 text-md text-slate-600 font-semibord py-2 border-2 border-slate-400 rounded-md my-5'>
            Back To All Products
          </button>
        </div>
        {/* 사용자 이름 */}
        <div className='gap-2 pb-2 text-gray-600 flex items-center'>
          <IoPersonCircleOutline className='h-10 w-10' />
          <span>{product.userName}</span>
        </div>
        <hr className='p-2' />
        <div className='flex justify-between'>
          <div className='inline-block'>
            <div className='flex items-center gap-2 border-2 px-2 my-2 justify-center rounded-2xl text-slate-700 border-slate-500'>
              <p className="font-medium text-sm">{product.status}</p>
              {/* 예약 가능 상태 */}
              {product.status === '예약 가능' && <p className="w-3 h-3 rounded-2xl bg-green-300"></p>}
              {/* 예약 중 상태 */}
              {product.status === '예약 중' && <p className="w-3 h-3 rounded-2xl bg-amber-500"></p>}
              {/* 렌탈 중 상태 */}
              {product.status === '렌탈 중' && <p className="w-3 h-3 rounded-2xl bg-rose-600"></p>}
            </div>
          </div>
        </div>
        <div className='text-gray-800 font-bold text-3xl py-2 '>{product.postTitle}</div>
        {/* 가격 */}
        <span>{product.postAmount}원/{product.postPeriod}</span>
        {/* 내용 */}
        <span>{product.postContent}</span>

        {product.userID !== userID ? (
          <div className='flex justify-center items-center py-10'>
            <button
              onClick={chatHandler}
              className='w-2/3 bg-indigo-400 text-lg text-white font-semibord py-2 border-2 border-indigo-300 rounded-3xl my-10'>
              채팅하기
            </button>
          </div>
        ) : (
          <div className='flex justify-center items-center py-10'>
            <button
              onClick={() => navigate(`/edit/${productId}`, {
                state: {
                  id: product.userID,
                  name: product.userName,
                  productId,
                  period: product.postPeriod,
                  title: product.postTitle,
                  content: product.postContent,
                  price: product.postAmount,
                  status: product.status,
                  src: imageSrc,
                }
              })}
              className='w-2/3 bg-yellow-400 text-lg text-white font-semibord py-2 border-2 border-yellow-300 rounded-3xl my-10'>
              수정하기
            </button>
          </div>
        )}
      </div>
    </div>
  );

}

export default Item;

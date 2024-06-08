import React, { useEffect, useState } from 'react';
import Item from '../../../components/item';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaSpinner } from "react-icons/fa";

export function MainItems() {
  const [products, setProducts] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [loading, setLoading] = useState(true);  // 로딩 상태 추가
  const [error, setError] = useState(null);      // 에러 상태 추가
  const userID = useSelector((state) => state.user.userID);
  const endpoint = "bookmarklist";

  // 상품 목록을 가져오는 함수
  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5001/");
      setProducts(res.data);
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  // 북마크 데이터를 가져오는 함수
  const getBookmark = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/${userID}/${endpoint}`, userID);
      if (res.status === 200) {
        const bookmarkData = res.data.map(data => data._id);
        setBookmark(bookmarkData);
      }
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getBookmark();
      await getProducts();
      setLoading(false);
    };
  
    fetchData();
  }, [userID]); // userID가 변경될 때만 실행되도록 의존성 배열 설정

  // 이미지 데이터를 Base64로 변환하는 함수
  const arrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  // 로딩 중일 때 스피너 표시
  if (loading) {
    return (
      <div className='relative font-Pretendard flex items-center justify-center top-80'>
        <div className='flex items-center gap-2 justify-center rounded-lg px-5 py-2 text-white bg-indigo-500'>
          <FaSpinner className='animate-spin' />
          <p className="text-lg shadow-sm" disabled>
            Processing...
          </p>
        </div>
      </div>
    );
  }

  // 에러가 발생했을 때 에러 메시지 표시
  if (error) {
    return <div className='text-center text-red-500'>{error}</div>;
  }

  return (
    <div className='flex justify-center'>
      <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product, index) => {
          let imageSrc = '';
          if (product.postImage && product.postImage.data) {
            const imageData = product.postImage.data.data;
            const base64Image = arrayBufferToBase64(imageData);
            imageSrc = `data:image/${product.postImage.contentType};base64,${base64Image}`;
          }
          const isBookmarked = bookmark.includes(product._id);
          return (
            <Item 
              key={index}
              name={product.userName}
              id={product.userID}
              productId={product._id}
              period={product.postPeriod}
              title={product.postTitle}
              price={product.postAmount}
              status={product.postStatus ? product.postStatus : "예약 가능"}
              src={imageSrc}
              content={product.postContent}
              bookmark={isBookmarked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MainItems;

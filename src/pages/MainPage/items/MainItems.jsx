import React, { useEffect, useState } from 'react';
import Item from '../../../components/item';
import axios from 'axios';
import { useSelector } from 'react-redux';

export function MainItems() {
  const [products, setProducts] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const userID = useSelector((state) => state.user.userID);
  const endpoint = "bookmarklist";


  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5001/");
      setProducts(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getBookmark = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/${userID}/${endpoint}`, userID);
      if (res.status === 200) {
        const bookmarkData = res.data.map(data => data._id);
        console.log(bookmarkData)
        setBookmark(bookmarkData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getBookmark();
      getProducts();
    };
  
    fetchData();
  }, []);
  

  // 이미지 데이터를 Base64로 변환하는 함수
  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  return (
    <>
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
    </>
  );
}
import React, { useEffect, useState } from 'react';
import Item from '../../../components/item';
import axios from 'axios';

export function MainItems() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5001/");
      setProducts(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
    console.log(products)
  }, []);

 // 이 부분은 이미지 데이터를 Base64로 변환하는 함수입니다.
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
              return (
                <Item 
                  key={index}
                  productId={product._id}
                  period={product.postPeriod}
                  title={product.postTitle}
                  price={product.postAmount}
                  status={product.postStatus ? product.postStatus : "예약 가능"}
                  src={imageSrc}
                  content={product.postContent}
                />
              );
            })}
        </div>
      </div>
    </>
  )  
}
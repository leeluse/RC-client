import React, { useEffect, useState } from 'react';
import Item from '../../../components/item';
import axios from 'axios';

export function MainItems() {
  const [products, setProducts] = useState([]);
  const [imagePaths, setImagePaths] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5001/");
      setProducts(res.data);
      
      // 이미지 경로만 추출하여 설정
      const paths = res.data.map((product) => 
        `http://localhost:5001/images/${product.postImage.fileName}`);
      
      setImagePaths(paths);

    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className='flex justify-center'>
        <div className='grid justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => (
            <Item 
              key={index}
              id={product._id}
              title={product.postTitle}
              price={product.postAmount}
              status={product.status ? status : "default"}
              src={imagePaths[index]}
            />
          ))}
        </div>
      </div>
    </>
  )  
}

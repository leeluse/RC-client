import axios from 'axios'
import React from 'react'

const Post = () => {
  const data = {
    title: 'title1',
    image: "title1's image",
    content: "title1's content",
  }
  const postHandler = async () => {
   try {
    const res = await axios.post('/posts', {

      title: data.title,
      image: data.image,
      content: data.content
     });
     console.log(res.data);
   } catch (error) {
      console.error(error);
   }

  }
console.log()
  return (

    <button 
      onClick={postHandler}
      className='border-2 border-black'>
        등록하기</button>

)
}

export default Post
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Items = ({ productId, period, title, price, status, src, content }) => {
  const [heart, setHeart] = useState(false);
  const userID = useSelector((state) => state.user.userID);
  const navigate = useNavigate();

  useEffect(() => {
  }, [heart])
  
  const BookmarkHandler = async () => {
    if(heart === false) {
      setHeart(true)
      addBookmark()
    } else {
      setHeart(false)
      deleteBookmark()
    }
  }

  const addBookmark = async ( ) => {
    try {
      console.log()
    const res = await axios.post(`http://localhost:5001/${userID}/addBookmark`, {
      userID: userID, postID: productId
    })
      if(res.status === 201) {
        console.log(res.data.msg);
      }
    } catch (error) {
      const { status, data } = error.response;
      if(status === 404) {
        console.log(data.msg)
      }
    }
  }

  const gotoProductsHandler = () => {
    // useLocation을 사용해 값을 주고 받기
    navigate(`/products/${productId}`, {
      state: {
        productId,
        period,
        title,
        content, 
        price, 
        status, 
        src
      }
    })
    
  }

  const deleteBookmark = async () => {
    try {
      const res = await axios.post(`http://localhost:5001/${userID}/deleteBookmark`, {
        userID: userID, postID: productId
      })
        if(res.status === 200) {
          console.log(res.data.msg);
        }
      } catch (error) {
        const { status, data } = error.response;
          if(status === 404) {
            console.log(data.msg)
          }
      }
  }

  return (
      <div 
        onClick={gotoProductsHandler}
        className='m-3 cursor-pointer shadow-md flex-col text-start font-Pretendard rounded-md border-2 '>
       {/* 상품 이미지 */}
       <div className="justify-center flex">
        <img className="w-[250px] h-[150px] object-cover rounded-t-md" src={src} />
       </div>
        <div className='mx-3 my-2 text-md'>
          {/* 상품 이름 */}
          <p className='font-bold text-md'>{title}</p>
          <p className='font-medium text-sm'>{price}원</p>
          <p className='font-medium text-sm'>{period}</p>
          
          {/* 상품 상태 */}
          <div className='flex justify-between'>
          <div className='inline-block'>
            <div className='flex items-center gap-2 border-2 px-2
            my-2 justify-center rounded-2xl text-slate-700 border-slate-500'>
             <p className="font-medium text-sm">{status}</p>
              {/* 예약 가능 상태 */}
              {status == '예약 가능' && (
              <p className="w-3 h-3 rounded-2xl bg-green-300"></p>)}
              {/* 예약 중 상태 */}
              {status == '예약 중' && (
              <p className="w-3 h-3 rounded-2xl bg-amber-500"></p>)}
              {/* 렌탈 중 상태 */}
              {status == '렌탈 중' && (
              <p className="w-3 h-3 rounded-2xl bg-rose-600"></p>)}
            </div>
            </div>

             {/* 좋아요 기능 */}
            {heart === false ? ( 
              <button onClick={BookmarkHandler}>
                <FaRegHeart className='w-6 h-6'/>
              </button>
              ) : ( 
                <button onClick={BookmarkHandler}>
                  <FaHeart className='w-6 h-6 text-red-500'/>
                </button>
                )}
          </div>
        </div>
    </div>
  );
}

export default Items;
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Items = ({ name, price, status, src }) => {
  const [heart, setHeart] = useState(false)

  useEffect(() => {
    
  
    return () => {
      
    }
  }, [heart])
  
  return (
      <div className='m-3 shadow-md flex-col text-start font-Pretendard rounded-md border-2 '>
       {/* 상품 이미지 */}
       <div className="justify-center flex">
        <img className="w-[250px] rounded-t-md" src={src} />
       </div>
        <div className='mx-3 my-2 text-md'>
          {/* 상품 이름 */}
          <p className='font-bold text-md'>{name}</p>
          <p className='font-medium text-sm'>{price}</p>
          
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
            {heart == false ? ( 
              <button onClick={() => {setHeart(true)}}>
                <FaRegHeart className='w-6 h-6'/>
              </button>
              ) : ( 
                <button onClick={() => {setHeart(false)}}>
                  <FaHeart className='w-6 h-6 text-red-500'/>
                </button>
                )}
          </div>
        </div>
    </div>
  );
}

export default Items;
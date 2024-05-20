import React, { useEffect, } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Chat = ({ showChat, setShowChat }) => {

  const chatUsers = [
    { userID: "ajgns123", name: "머훈", item: "전자 킥보드 렌탈", message: "안녕하세여" },
    { userID: "fntm", name: "루스", item: "애플 맥북 프로 13인치",message: "렌탈 가능한가요?" },
    { userID: "suyeon1420", name: "수연", item: "스쿠버 다이빙 장비", message: "감사합니다!" },
  ];

  useEffect(() => {

  }, [showChat]);

  return (
    <>
      {showChat && (
        <div className='absolute shadow-lg right-0  w-1/3 h-screen z-50 bg-white'>
          <button className="p-5" onClick={() => setShowChat(false)}>
          <IoArrowBackOutline className='h-8 w-8'/>
          </button>
          <div className='flex items-center mx-8 w-full'>
          <p className='font-[Pretendard] text-[28px] font-bold'>채팅하기</p>
          </div>

          {chatUsers.map((user, index) => (
          <>
          <Link to={`/chat/${user.userID}`}>
          <div
            key={index} 
            className='font-[Pretendard] font-bold '>
            <ul>
              <ul className='bg-slate-500  flex items-end min-w-96 justify-between'>
                <div className='flex items-center  gap-5'>
                  <li><IoPersonCircleOutline className='w-12 h-12'/></li>
                  <div className='flex-row'>
                  <li className='text-[20px]'>{user.name}</li>
                  <li className='text-[15px]'>{user.item}</li>
                </div>
                </div>
                <div className='text-right min-w-20 '>
                <li>{user.message}</li>
                </div>
              </ul>
            </ul>
            </div>
          </Link>
            </>
          ))}
          </div>
      )}
    </>
  );
};

export default Chat;
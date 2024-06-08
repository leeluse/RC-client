import React, { useEffect, useState } from 'react';
import { IoArrowBackOutline, IoPersonCircleOutline } from "react-icons/io5";
import ChatRoom from './ChatRoom';
import { useSelector } from 'react-redux';

const ChatMain = ({ showChat, setShowChat, chatData }) => {
  const [chatUsers, setChatUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const userID = useSelector((state)=> state.user.userID)

  useEffect(() => {
    const users = chatData.map(v => ({
      roomID: v._id,
      userID: userID,
      postUserID: v.postUser_ID.user_ID,
      postUserName: v.postUser_ID.user_Name,
      item: v.roomName,
    }));
    setChatUsers(users);
  }, [chatData]);

  const handleBackButtonClick = () => {
    if (selectedUser) {
      setSelectedUser(null);
    } else {
      setShowChat(false);
    }
  };



  return (
    <>
      {showChat && (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='fixed inset-0 bg-black opacity-50'></div> {/* 배경을 어둡게 하는 오버레이 */}
          <div className='relative w-full h-full flex items-center justify-center'>
            <div className='bg-white rounded-lg shadow-lg h-2/3 overflow-hidden scrollbar-hide min-w-1/3 max-w-2xl'>
              <div className='w-full h-full flex flex-col'>
                <div className='w-full flex items-center px-2 pt-5'>
                  <button className="p-2" onClick={handleBackButtonClick}>
                    <IoArrowBackOutline className='h-8 w-8' />
                  </button>
                  <div className='flex flex-col mx-1'>
                    <p className='font-Pretendard text-[28px] font-bold'>
                      {selectedUser ? selectedUser.name : "채팅하기"}
                    </p>
                    {selectedUser && (
                      <p className='text-sm font-Pretendard max-w-60 pr-10'>
                        {selectedUser.item}
                      </p>
                    )}
                  </div>
                </div>
                <div className='flex-col bg-slta overflow-auto scrollbar-hide h-full p-2'>
                  {selectedUser ? (
                    <ChatRoom  users={selectedUser}  />
                    // userId={selectedUser.userID} roomId={selectedUser.roomID} userName={selectedUser.name}
                  ) : (
                    chatUsers.map((user, index) => (
                      <div 
                        onClick={() => setSelectedUser(user)}
                        key={index}
                        className='cursor-pointer font-[Pretendard] font-bold p-1'>
                        <div className='w-[350px] g-slate-300  flex items-center justify-between p-2 rounded-md mb-2'>
                          <div className='flex items-center gap-5'>
                            <IoPersonCircleOutline className='min-w-10 min-h-10' />
                            <div className='flex flex-col max-w-60 mr-10'>
                              <p className='text-md'>{user.postUserName}</p>
                              <p className='text-sm font-medium'>{user.item}</p>
                            </div>
                          </div>
                          <div className='text-right'>
                            {/* <p>안녕하세여</p> */}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatMain;

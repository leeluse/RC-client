import React, { useEffect, useState } from 'react';
import { IoSend } from "react-icons/io5";
import socket from '../../util/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

const ChatRoom = ({ users }) => {
  const { item, roomID, userID, postUserID, postUserName, etc_id } = users;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const date = moment().format('MM-DD HH:mm'); // 여기서 타임스탬프 생성

  useEffect(() => {
    getPrevMessage(roomID);

    socket.on('chat message', (msg) => {
      if (msg.room === roomID) {
        setMessages((prevMessages) => [...prevMessages, msg]);
      }
    });

    return () => {
      socket.off('chat message');
    };
  }, [roomID]);

  const getPrevMessage = async (roomID) => {
    console.log(roomID)
    try {
      const res = await axios.post(`http://localhost:5001/messages/${roomID}`)
      if (res.status === 200) {
        setMessages(res.data.messages);
      } else {
        console.error('Failed to fetch previous chat messages');
      }
    } catch (error) {
      console.error('Error fetching previous chat messages:', error);
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    const msg = {
      roomID,
      receiverID: postUserID, // 메시지를 받는 사용자의 ID
      senderID: userID, // 메시지를 보내는 사용자의 ID
      chat: message,
      createdAt: date // 타임스탬프 추가
    };
    socket.emit('sendMessage', msg, (response) => {
      if (response.ok) {
        setMessage('');
      } else {
        console.error(`Error: ${response.data}`);
      }
    });
  };

  return (
    <div className='flex flex-col items-center h-full'>
      <div className='font-Pretendard rounded-md flex-wrap overflow-auto scrollbar-hide p-1 h-full'>
        <div className='min-w-[350px] h-full flex flex-col  justify-between '>
          <div className='h-3/4'>
            {messages.map((msg, index) => (
              <div key={index} className={` w-[350px] flex items-center ${msg.senderID === userID ? 'justify-end' : 'justify-start'}  mb-3 `}>
                <div>
                <p className={`shadow-sm border border-slate-200 text-[15px] w-full ${msg.senderID === userID ? 'bg-white text-right text-slate-700 ' 
                  : 'bg-slate-100 text-slate-700 text-left'} max-w-60 px-4 py-[0.4rem] rounded-[8px]`}>
                  {msg.chat}
                </p>
                <p className={`p-1 text-slate-300 text-[12px] ${msg.senderID === userID ? 'text-right' : 'text-left'}`}>{msg.createdAt}</p> {/* 타임스탬프 포맷 설정 */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='h-20 w-full font-Pretendard text-medium'>
        <form onSubmit={handleSendMessage} className='w-full h-full flex justify-center items-center'>
          <input 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='type in here'
            rows={1}
            className='w-full rounded-lg px-2 p-1 m-1 border bg-white' />
          <button type="submit">
            <IoSend className='rounded-sm flex p-1 m-1 w-10 h-10 text-slate-800'/>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;

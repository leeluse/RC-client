import React, { useEffect, useState } from 'react';
import { IoSend } from "react-icons/io5";
import socket from '../../util/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ChatRoom = ({ users }) => {
  const { item, roomID, userID, postUserID, postUserName } = users;
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const myID = useSelector((state) => state.user.userID)

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
        console.log(res.data.messages)
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
      receiverID: userID, // 메시지를 받는 사용자의 ID
      senderID: myID, // 메시지를 보내는 사용자의 ID
      chat: message
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
      <div className='font-[Pretendard] rounded-md flex-wrap overflow-auto scrollbar-hide font-bold p-1 h-full'>
        <div className='h-full flex flex-col justify-between'>
          <div className='h-3/4'>
            {messages.map((msg, index) => (
              <div key={index} className={`w-[350px] flex items-center ${msg.senderID === myID ? 'text-white justify-end' : 'justify-start'} rounded-md mb-2`}>
                <p className={`text-[15px] w-full border-2 ${msg.senderID === myID ? 'bg-blue-100 text-right' : 'bg-slate-100 text-left'} text-gray-800 font-medium max-w-60 p-1 rounded-[15px]`}>
                  {msg.chat}
                </p>
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

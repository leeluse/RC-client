import React from 'react'
import { IoSend } from "react-icons/io5";


const TextField = ({message, setMessage, sendMessage}) => {
  return (
    <>
     <form
            onSubmit={sendMessage}
            className='w-full h-full flex justify-center items-center'>
            <input 
              value={message}
              placeholder='type in here'
              // multiline={false}
              rows={1}
              className='w-full rounded-lg px-2 p-1 m-1 border bg-white' />
            <button>
            <IoSend
              className='rounded-sm flex p-1 m-1 w-10 h-10  text-slate-800'/>
            </button>
          </form>
    </>
  )
}

export default TextField
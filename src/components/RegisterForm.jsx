import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate, } from 'react-router-dom'
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from 'axios';

const RegisterForm = ({title, registerHandler}) => {
  const {register, setValue, getValues, handleSubmit, formState: {errors}, reset } = useForm({
  mode: 'onSubmit'
  })

  useEffect(() => {
  }, [])


  const onSubmit = (data) => {
    registerHandler(data)
    reset();
  }

  const notify = (message) => {
    if(errors && errors.name && message == errors.name.message ) {
      toast.error(`${message}`, { duration: 1800 })
    }
    if(errors && errors.id && message == errors.id.message ) {
      toast.error(`${message}`, { duration: 2000 })
    }
    if (errors && errors.password && message === errors.password.message) {
      toast.error(`${message}`, { duration: 2300 });
    }

  }
  const userName = {
    required: "이름은 필수 필드입니다",
    minLength: {
      value: 2,
      message: "이름은 최소 2자입니다",
    },

  }

  const userID = {
    required: "아이디는 필수 필드입니다",
    pattern: {
      value: /^[a-zA-Z0-9]+$/,
      message: "아이디는 영문자와 숫자만 포함해야 합니다",
    },
    minLength: {
      value: 4,
      message: "아이디는 최소 4자입니다",
    },
    maxLength: {
      value: 13,
      message: "아이디는 최대 13자입니다",
    },
  }


  const userPassword = {
    required: "비밀번호는 필수 필드입니다",
    maxLength: {
      value: 13,
      message: "비밀번호는 최대 13자입니다",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "비밀번호는 최소 8자, 영문자와 숫자를 포함해야 합니다",
    },
   

  }

  const userPasswordConfirm = {
    required: "비밀번호를 다시 입력하세요",
    validate: {
      matchesPreviousPassword: (value) => {
        const {password} = getValues();
          return password === value || "비밀번호가 일치하지 않습니다";
      }
    }
  }


  return (
    <>
    <section className='z-0 h-full flex justify-center items-center  font-[Pretendard] '>
    <div className='py-10 w-96 shadow-lg bg-slate-200 rounded-lg flex-col items-center '>
    {/* Header */}


    <div className='flex flex-col justify-center text-center'>
     <p className='text-[28px] font-bold'>Rental Change</p>
     <p className='text-[16px] font-bold pb-2'>{title} 시작하기</p>

     <hr className="border-t border-gray-300 px-20" />

     {/* Input */}
    <form onSubmit={handleSubmit(onSubmit)} className='py-5 px-10'>
      
    {title === '회원가입' && (
      <>
       <p className='text-start text-[16px] font-bold'>User Name</p>
          <input 
              {...register("name", userName)}
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Enter Your Name' 
              type="userName" />
      </>
    )}
      <p className='text-start text-[16px] font-bold'>ID</p>
          <input 
              {...register("id", userID)}
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Enter Your ID' 
              type="id" />

      <p className='text-start text-[16px] font-bold '>Password</p>
          <input 
              {...register("password", userPassword)}
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Enter Your Password' 
              type="password" />


       {title === '회원가입' && (
        <>
        <p className='text-start text-[16px] font-bold'>Password Confirm</p>
          <input 
              {...register("passwordConfirm", userPasswordConfirm)}
              className="w-full px-2 py-1 border-2 border-slate-300 rounded-md mb-5" 
              placeholder='Check Your Password' 
              type="password" />
   
        </>
       )}
           
      <div>

      {errors?.passwordConfirm && (
           <p className='font-semibold text-red-700'>{errors.passwordConfirm.message}</p>
         )}
      
          <button
          type='submit'
          className='px-20 my-3 py-2 bg-slate-500 text-white shadow-orange-200 rounded-md'>
            {title == '로그인' ? 'Sign In' : 'Sign Up'}  
          </button>
        </div>
      </form>


          {/* ID 유효성 인증 실패 */}
          <Toaster />
          {errors?.name && notify(errors.name.message)}
          {errors?.id && notify(errors.id.message)}
          {errors?.password && notify(errors.password.message)}
         
          { title == '회원가입' ? 
          ( <p className='text-[16px] font-medium'> 계정이 존재합니까? 
              <Link className='font-bold' to='/signin'>
                {" "} 로그인
              </Link> </p> ) : 
          ( <p className='text-[16px] font-medium'> 계정이 없습니까? 
            <Link className='font-bold' to='/signup' >
              {" "} 회원가입
            </Link> </p> )
          }
       
        </div>
    </div>
  </section>
  </>
  )
}

export default RegisterForm
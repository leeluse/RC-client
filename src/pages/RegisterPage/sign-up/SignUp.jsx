import React from 'react'
import RegisterForm from '../../../components/RegisterForm';
import Nav from '../../../components/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () =>{
  const navigate = useNavigate()

  const registerHandler = async (data) => {
    try {
      const res = await axios.post('http://localhost:5001/signup', data);
      if (res.status === 201) {
        console.log('회원가입 성공: ', res.data);
        navigate("/sign-in")
      }
    } catch (error) {
      const { status } = error.response
      if(error.response) {
        // 서버 응답이 있는 경우
        if(status === 409) {
          prompt("이미 가입된 계정입니다");
        } else {
          console.log("서버 오류")
        }
        }
      }
  }

  return (
   <>
    <div className='white h-full'>
      <RegisterForm title={'회원가입'} registerHandler = {registerHandler} />
    </div>
  </>
  )
}

export default SignUp
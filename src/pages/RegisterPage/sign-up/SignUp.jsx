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
        navigate("/signin")
      }
    } catch (error) {
      console.error('오류가 발생했습니다:', error.response.data)
      }
  }

  return (
   <>
   <Nav />
    <div className='white h-full'>
      <RegisterForm title={'회원가입'} registerHandler = {registerHandler} />
    </div>
  </>
  )
}

export default SignUp
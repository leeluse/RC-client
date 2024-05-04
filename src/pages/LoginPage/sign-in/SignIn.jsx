import React from 'react'
import RegisterForm from '../../../components/RegisterForm';
import Nav from '../../../components/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();

  const registerHandler = async (data) => {
    try {
      const res = await axios.post('http://localhost:5001/signin', data);
      if(res.status === 200) {
          console.log("로그인 성공", res.data);
          navigate("/");
      } else {
        console.log(res.status)
      }
    } catch (error) {
      console.error()
    }
  }

  return (
   <>
   <Nav />
    <div className='white h-full'>
      <RegisterForm title={'로그인'} registerHandler = {registerHandler}/>
    </div>
  </>
  )
}

export default SignIn
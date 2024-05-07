import React from 'react'
import RegisterForm from '../../../components/RegisterForm';
import Nav from '../../../components/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch  } from 'react-redux'
import { getUser } from '../../../reducer/user'

const SignIn = () => {
  // user 저장을 위한 selector & dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (data) => {
    try {
      const res = await axios.post('http://localhost:5001/signin', data);
      if(res.status === 200) {
          console.log("로그인 성공", res.data);
          // 로컬 스토리지에 userData 저장
          dispatch(getUser(res.data))
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
    <div className='white h-full'>
      <RegisterForm title={'로그인'} registerHandler = {registerHandler}/>
    </div>
  </>
  )
}

export default SignIn
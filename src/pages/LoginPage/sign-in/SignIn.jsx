import React from 'react'
import RegisterForm from '../../../components/RegisterForm';
import Nav from '../../../components/Nav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch  } from 'react-redux'
import { setUser } from '../../../reducer/user'

const SignIn = () => {
  // user 저장을 위한 selector & dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (data) => {
    try {
      const res = await axios.post('http://localhost:5001/signin', data, {
        withCredentials: true // 쿠키 허용
      });
      if(res.status === 200) {
          console.log("로그인 성공", res.data);
          // 로컬 스토리지에 userData 저장
          dispatch(setUser(res.data.userID, res.data.accessToken));
          navigate("/");
      } 
      else {
        console.log(res.status.message)
      }
    } catch (error) {
      const { status, data } = error.response
      if(error.response) {
        // 서버 응답이 있는 경우
        if(status === 404) {
          alert(data.message);
        }
        else if(status === 409) {
          alert(data.message);
        }
        else if(status === 500) {
          alert(data.message);
        } 
        else {
          console.log("서버 오류")
        }
      }
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
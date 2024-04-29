import React from 'react'
import RegisterForm from '../../../components/RegisterForm';
import Nav from '../../../components/Nav';


const SignIn = () => {
  return (
   <>
   <Nav />
    <div className='white h-full'>
      <RegisterForm title={'로그인'}/>
    </div>
  </>
  )
}

export default SignIn
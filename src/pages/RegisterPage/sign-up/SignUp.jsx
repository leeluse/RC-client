import React from 'react'
import RegisterForm from '../../../components/RegisterForm';
import Nav from '../../../components/Nav';


const SignUp = () => {
  return (
   <>
   <Nav />
    <div className='white h-full'>
      <RegisterForm title={'회원가입'}/>
    </div>
  </>
  )
}

export default SignUp
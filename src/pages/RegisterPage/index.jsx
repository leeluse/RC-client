import React, { useEffect } from 'react'
import SignUp from '../RegisterPage/sign-up/SignUp'

const RegisterPage = () => {
  useEffect(() => {
  }, [])
  
  return (
    <>
    <div className='flex flex-col h-screen'>
      <SignUp />
    </div>
    </>
    
  )
}

export default RegisterPage
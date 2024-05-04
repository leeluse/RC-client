import React, { useEffect } from 'react'
import SignIn from '../LoginPage/sign-in/SignIn'

const LoginPage = () => {
  
  useEffect(() => {
  }, [])
  
  return (
    <>
    <div className='flex flex-col h-screen'>
      <SignIn />
    </div>
    </>
    
  )
}

export default LoginPage
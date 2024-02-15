import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex mt-20 text-center  items-center justify-center'>
      <SignIn/>
    </div>
  )
}

export default SignInPage

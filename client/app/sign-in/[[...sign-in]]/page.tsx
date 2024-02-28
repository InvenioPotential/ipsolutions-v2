import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  return (
    <div className='flex mt-20 text-center  items-center justify-center'>
        <SignIn/>
    </div>
  )
}

export default SignInPage

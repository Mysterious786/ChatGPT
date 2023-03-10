"use client";
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
//If no session then login page will be showned 
function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center
     justify-center text-center'>
      <Image
      src="https://links.papareact.com/2i6"
      width={300}
      height={300}
      alt="logo"/>
      {/* google since the provider chosen is google */}
      
      <button onClick={()=>signIn('google')} className='text-white font-bold text-3xl animate-pulse'>Sign In To ChatGPT</button>
    </div>
  )
}

export default Login

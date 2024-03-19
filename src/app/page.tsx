"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Cloud from '../../assets/cloud.png'
export default function Home() {

  return (
    <main className="h-screen flex justify-center flex-col items-center gap-5 bg-[#cecece]">
      <div
        className='
      overflow-hidden
      rounded-[20px]
      w-[500px]
      h-[90%] 
    bg-[#0b499c]
      '
      >
        <Image
          className='
          w-[100%] 
          h-[30%] object-cover'
          src={Cloud} />

        <div
          className='
        p-3
         bg-[#fff]
         w-[100%] 
         h-[70%] 
         flex
         flex-col
         items-center
         '
        >
          <div className='text-lg mt-5'>Log in</div>
          <div className='
          w-[80%] 
          h-[100%] 
           flex
         flex-col justify-around'>

            <div className='w-[100%] flex flex-col justify-around gap-5'>
              <div className='w-[100%] '>
                <div className='mb-5'>Email</div>
                <input placeholder='Enter your mail' type="text" className='w-[100%] border-x-red border-b-2 border-[#208cef]' />
              </div>
              <div className='w-[100%] '>
                <div className='mb-5'>Password</div>
                <input placeholder='Enter your password' type="text" className='w-[100%] border-x-red border-b-2 border-[#208cef]' />
              </div>
              <button
                className="w-[100%] border-2 border-[#208cef] p-3 rounded-lg text-black font-semibold"
              >Log in</button>
            </div>

            <div className='w-[100%]'>
              <div
                className='bg-[#fff] w-[100%]  h-[60%]  flex flex-col items-center gap-4'
              >
                <button
                  onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                  className="w-[100%] border-2 border-[#208cef] p-3 rounded-lg text-black font-semibold"
                >Login com github</button>
                <button
                  onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                  className="w-[100%] border-2 border-[#208cef] p-3 rounded-lg text-black font-semibold"
                >Login com google</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}

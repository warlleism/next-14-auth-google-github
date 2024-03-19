"use client"

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Cloud from '../../assets/cloud.png'
import { GoogleCircleFilled, GithubFilled, CheckOutlined } from '@ant-design/icons';

export default function Home() {

  return (
    <main className="h-screen flex justify-center flex-col items-center gap-5 bg-[#cecece]">
      <div
        className=' overflow-hidden rounded-[20px] w-[500px] h-[90%] bg-[#0b679c]'>
        <Image
          className='w-[100%] h-[30%] object-cover'
          src={Cloud} />
        <div
          className=' p-3  bg-[#fff] w-[100%]  h-[70%]  flex flex-col items-center'>
          <div className='text-[1.7rem] mt-5'>Log in</div>
          <div className=' w-[80%]  h-[100%] flex flex-col justify-around'>
            <div className='w-[100%] flex flex-col justify-around gap-5'>
              <div className='w-[100%] '>
                <div className='mb-4'>Email</div>
                <div className='flex justify-center items-center relative'>
                  <input placeholder='Enter your mail' type="text" className='w-[100%] outline-none border-x-red border-b-2 border-[#39c7ff] pr-6' />
                  <CheckOutlined className='absolute right-0 text-[#07ea95]' />
                </div>
              </div>
              <div className='w-[100%] '>
                <div className='mb-4'>Password</div>
                <div className='flex justify-center items-center relative'>
                  <input placeholder='Enter your password' type="text" className='w-[100%] outline-none border-x-red border-b-2 border-[#39c7ff] pr-6' />
                  <CheckOutlined className='absolute right-0 text-[#07ea95]' />
                </div>
              </div>
              <button
                className="w-[100%] border-2 border-[#39c7ff] p-3 rounded-lg text-black font-semibold"
              >Log in</button>
            </div>
            <div className='w-[100%]'>
              <div className='bg-[#fff] w-[100%]  h-[60%]  flex flex-col items-center gap-4'>
                <button
                  onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                  className="flex justify-center items-center gap-3 w-[100%] border-2 border-[#39c7ff] p-2 rounded-lg text-black font-semibold"
                >Login com github
                  <GithubFilled className='text-[30px] text-[#050a16]' /></button>
                <button
                  onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                  className=" flex justify-center items-center gap-3 w-[100%] border-2 border-[#39c7ff] p-2 rounded-lg text-black font-semibold"
                >Login com google
                  <GoogleCircleFilled className='text-[30px] text-[#2d5a96]' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

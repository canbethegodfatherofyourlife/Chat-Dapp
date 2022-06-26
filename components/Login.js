import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const Login = () => {

    const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
        <div className="flex flex-col
         absolute z-50 items-center 
         justify-center w-full space-y-4 h-4/6">
            <Image className="object-cover rounded-full" 
                height={200} width={200} 
                src='https://links.papareact.com/3pi'
            />
            <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold
            animate-pulse text-black">Login to the METAVERSE</button>
        </div>
        <div className="w-full h-screen">
            <Image 
                src="https://links.papareact.com/55n"
                layout='fill'
                objectFit='cover'
            />
        </div>
    </div>
  )
}

export default Login
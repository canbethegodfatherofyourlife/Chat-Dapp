import Image from 'next/image';
import React from 'react'
import {useMoralis} from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

const Header = () => {

    const {user} = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 
    z-50 bg-black shadow-sm border-b-2 border-pink-700">
        <div className="grid grid-cols-5 lg:grid-cols-6 
        items-end lg:items-center">
            <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                <Image layout="fill" className="rounded-full" objectFit="cover"
                src="https://links.papareact.com/3pi" />
            </div>
            <div className="col-span-4 text-left lg:text-center">
                <div className="h-48 w-48 border-8 rounded-full 
                relative lg:mx-auto border-pink-700">
                    <Avatar logoutOnPress />
                </div>
                <h1 className="text-3xl">Welcome to Godafther Metaverse</h1>
                <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                {/* Change username component */}
                <ChangeUsername />
            </div>
        </div>
    </div>
  )
}

export default Header
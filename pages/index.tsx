import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'

const Home: NextPage = () => {

  const {isAuthenticated,logout} = useMoralis()

  if (!isAuthenticated) {
    return <Login />
  }
  return (
    <div className="">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1>Welcome to the App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home

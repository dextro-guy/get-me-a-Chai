"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className='bg-slate-800 text-white px-4 h-16 flex justify-between items-center'>
      <div className="logo font-bold text-lg">GetmeaChai!</div>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href={"/login"}>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>

      </div>
      
    </nav>
  )
}

export default Navbar

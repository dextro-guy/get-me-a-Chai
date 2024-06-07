"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
const Dashboard = () => {
  const { data: session } = useSession()
  if (!session) {
    const router=useRouter();
    router.push('/login')
  }
  return (
    <div>
      This is your profile info
    </div>
  )
}

export default Dashboard

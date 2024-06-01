import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white px-4 h-16 flex justify-between items-center'>
      <div className="logo font-bold text-lg">GetmeaChai!</div>
      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
      
    </nav>
  )
}

export default Navbar

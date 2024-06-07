import React from 'react'

const Username = ({params}) => {
  return (
    <>
     <div className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white'>

    <div className='cover bg-red-50 w-full relative' >
      <img className='w-full object-cover  h-[360px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2976660/495e17f5d00242a2b164b45cf85b8d19/eyJ3IjoxMjAwLCJ3ZSI6MX0%3D/3.jpg?token-time=1720051200&token-hash=_XEBA4wszSPXhCTDKcPOBqgpp2cKt6GSjAiApHLrXjA%3D" alt="" />
      <div className='absolute right-[46%] -bottom-20 border-2 border-white rounded-full'>
        <img className='rounded-full' width={150} height={150} src="pf.jpg" alt="" />
      </div>
    </div>
    <div className="info flex flex-col justify-center items-center py-24">
      <div className='font-bold text-lg'>
      @{params.username}
      </div>
      <div className='text-slate-400'>
        Creating animated art for VIT's
      </div>
      <div className='text-slate-400'>
        9,719 members . 82 posts . $15,450/release
      </div>
      <div className="payment flex mt-11 mb-4 gap-3 w-[80%]">
        <div className="supporters w-1/2 bg-slate-900 p-10">
          <h2 className='font-bold text-center text-2xl my-5'>Supporters</h2>
          <ul className='mx-5'>
            <li className='my-4 flex gap-2 items-center'>
              <img className='rounded-full' width={22} src="avatar.gif" alt="" />
              Shubham donated <span className="font-bold">$30</span>  with a message ""</li>
            <li className='my-4 flex gap-2 items-center'>
              <img className='rounded-full' width={22} src="avatar.gif" alt="" />
              Shubham donated <span className="font-bold">$30</span>  with a message ""</li>
            <li className='my-4 flex gap-2 items-center'>
              <img className='rounded-full' width={22} src="avatar.gif" alt="" />
              Shubham donated <span className="font-bold">$30</span>  with a message ""</li>
            
          </ul>
        </div>
        <div className="makePayment w-1/2 bg-slate-900 p-10">
          <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
          <div className="flex flex-col gap-2">
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
            <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

          </div>
          <div className="flex gap-3 mt-5">
            <button className='p-3 rounded-lg bg-slate-800'>Pay $20</button>
            <button className='p-3 rounded-lg bg-slate-800'>Pay $50</button>
            <button className='p-3 rounded-lg bg-slate-800'>Pay $100</button>
          </div>
        </div>
      </div>
    </div>
     </div>
    </>
  )
}

export default Username

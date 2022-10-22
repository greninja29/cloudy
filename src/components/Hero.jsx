import React from 'react'
import bgimg from '../assets/cyber-bg.png'

export default function Hero() {
  return (
    <div>
      <div className='w-full bg-zinc-200 flex flex-col justify-between'>
         <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col mx-auto  justify-center md:items-start px-2 py-8'>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-4xl md:text-6xl font-bold'>Cloud Management</h1>
                <p className='text-2xl'>This is our Tech brand.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
            </div> 
            <div>
              <img className='w-full  p-3' src={bgimg} alt="" />
            </div>   
            <div className='relative bottom-10 md:bottom-0 sm:relative sm:bottom-10 md:col-span-2 flex flex-col sm:py-8  mx-1 py-2 w-full bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
              <div className='md:mx-auto md:w-2/3'>
              <p className='font-bold'>Data Services</p>
              <div className='flex justify-between flex-wrap w-full px-4'>
                <p className='flex px-2 py-2'>
                  <div className='text-indigo-600 h-6'>
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                   </svg>
                   </div>
                  App security
                </p>
                <p className='flex px-2 py-2'>
                  <div className='text-indigo-600 h-6'>
                  <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                   </svg>
                   </div>            
                 Dash board design
                </p>
                <p className='flex px-2 py-2'>
                  <div  className='text-indigo-600 h-6'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg> 
                </div>
                  cloud data
                </p>
                <p className='flex px-2 py-2'>
                  <div className='text-indigo-600 h-6'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                </div>
                   API
                </p>
              </div>
              </div>
            </div>
         </div>   
      </div>
    </div>
  )
}

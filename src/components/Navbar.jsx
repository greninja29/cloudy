import React,{useState} from 'react'

export default function Navbar() {
     
    const [nav,setnav]=useState(false)
    const handleonclick=()=>setnav(!nav)
    const handleonclose=()=>setnav(!nav)

  return (
    <div className=''>
      <div className='p-6 flex items-center justify-between bg-gray-400 space-x-3 h-full w-full'>
        <div className='flex items-center w-10/12 md:w-7/12'>
        <h1 className='text-3xl font-bold m-auto sm:mr-4'>Cloudy</h1>
        <ul className='hidden w-full sm:flex sm:justify-around ml-4 '>
            <li className='hover:scale-125 hover:cursor-pointer  transition-all'>Home</li>
            <li className='hover:scale-125 hover:cursor-pointer transition-all'>Support</li>
            <li className='hover:scale-125 hover:cursor-pointer transition-all'>About</li>
            <li className='hover:scale-125 hover:cursor-pointer transition-all'>Platforms</li>
            <li className='hover:scale-125 hover:cursor-pointer transition-all'>Pricing</li>
        </ul>
        </div>
        <div className='hidden sm:flex '>
            <button className='bg-transparent text-black border-none mr-4'>SignIn</button>
            <button className='p-2 px-3'>SignUp</button>
        </div>
        <div className='sm:hidden'>
          <button className={!nav?'hidden':''} onClick={handleonclose} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
          <button onClick={handleonclick} className={nav?'hidden':''} >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          </button> 
        </div>
      </div>
      <div className={!nav?'hidden':''} >
        <ul className='absolute bg-zinc-200 w-full px-8 space-y-5 py-4 md:hidden'>
          <li className='border-b-2 border-gray-600'>Home</li>
          <li className='border-b-2 border-gray-600'>About</li>
          <li className='border-b-2 border-gray-600'>Support</li>
          <li className='border-b-2 border-gray-600'>Platforms</li>
          <li className='border-b-2 border-gray-600'>Pricing</li> 
          <div className='flex flex-col space-y-3'>   
             <button className='bg-transparent text-black px-8 py-3 mb-4'>SignIn</button>                     
              <button className='px-8 py-3'>SignUp</button>   
          </div>      
        </ul>       
      </div>
    </div>
  )
}

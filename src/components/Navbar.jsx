import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Search';
export const Navbar = ({darkTheme,setDarkTheme}) => {

  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 '>
        <div className='flex justify-between items-center space-x-4 w-screen'>
        
        <Link to='/' className=''>
        <p className='text-2xl bg-blue-600 font bold text-white py-1  px-2 rounded-lg dark:bg-gray-500 dark:text-gray-900'>Ib7ath</p>
      </Link>
      <button onClick={()=>setDarkTheme(!darkTheme)}>
        {darkTheme?'☀️':'🌙'}
      </button>
      </div>
      <Search/>
    </div>
  )
}

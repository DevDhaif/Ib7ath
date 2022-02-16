import React from 'react'
import { FaBeer, FaImage, FaNewspaper, FaPhotoVideo, FaSearch, FaVideo } from 'react-icons/fa';
import { NavLink } from 'react-router-dom'

const links=[
    {url:'/search',text:` All`,icon:<FaSearch />},
    {url:'/news',text:'News',icon:<FaNewspaper />},
    {url:'/images',text:'Images',icon:<FaImage />},
    {url:'/videos',text:'Videos',icon:<FaVideo />},
]
export const Links = () => {
  return (
    <div activeclassname="bg-green-500" className='flex sm:justify-around justify-between space-x-4 items-center mt-4'>
    
    {links.map(({url,text,icon})=>(

        <NavLink key={url} to={url} className={({ isActive }) => (isActive ? 'inline-flex  text-blue-700 border-b-2 mb-0 dark:text-blue-300 border-blue-700 pb-2' : 'space-x-2')  }>
        <div className='flex items-baseline space-x-2 justify-between  w-12'>
        <span className='mb-0 mx-1'>
        {icon}
        </span>
        {text} 
        </div>    
        </NavLink>
        
    ))}
    </div>
  )
}

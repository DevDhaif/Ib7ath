import React, { useEffect } from 'react'

export const Images = ({image_results}) => {
    
  return (
    <div className='grid grid-cols-3 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 justify-center items-center w-full space-y-6 sm:px-8'>
                {image_results?.map(({image,link:{href,title}},index)=>(
                    
                    <a className='m-0.5  p-2 space-y-2' href={href} key={index} target="_blank" rel='noreferrer'>
                        <img className='w-32 max-h-40' src={image?.src} alt={title} loading="lazy" />
                        <p className='w-36 break-words text-sm mt-2'> {title}</p>
                    </a>
                ))}
                </div>
    )
}

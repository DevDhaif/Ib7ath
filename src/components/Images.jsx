import React from 'react'

export const Test = ({results}) => {
  return (
    <div className='felx flex-wrap justify-center items-center space-y-6 sm:px-8'>
                {results?.image_results?.map(({image,link:{href,title}},index)=>(
                    
                    <a className='m-0.5  p-2' href={href} key={index} target="_blank" rel='noreferrer'>
                        <img className='w-32 h-auto' src={image?.src} alt={title} loading="lazy" />
                        <p className='w-36 break-words text-sm mt-2'> {title}</p>
                    </a>
                ))}
                </div>
    )
}

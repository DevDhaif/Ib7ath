import React from 'react'

export const News = ({results}) => {
  return (
    <div className='felx flex-wrap justify-between space-y-6 sm:px-8'>
            
               
    {results?.map(({links,title,id,source})=>(
    <div key={title} className='md:w-2/3 w-full '>
        <a href={links?.[0].href} target="_blank" rel='noreferrer' className='hover:underline'>
                <p className='text-lg dark:text-blue-300 text-blue-700'>
                    {title}
                </p>
                </a>
                <div className='flex gap-4'>
                    <a href={source?.href} target="_blank" rel='noreferrer' className='hover:underline'>
                        {source?.href} 
                    </a>
                </div>
    </div>
))}

</div>
    )
}

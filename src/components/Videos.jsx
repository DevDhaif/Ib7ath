import React from 'react'
import ReactPlayer from 'react-player'

export const Videos = ({results}) => {
  return (
    <div className='grid grid-cols-1 mx-auto w-full md:grid-cols-2 lg:grid-cols-3 justify-center items-center xl:grid-cols-5 w-ful gap-4 '>

    {console.log(results)}
        {results.map((video,index)=>(
            <div className='p-2 ' key={index}>
            {video.additional_links?.[0].href.includes('https://www.youtube.com') && (
                <div className='w-full items-center justify-center'>
                <ReactPlayer url={video.additional_links?.[0].href} controls width="330px" height="200px"/>
                <p>{video.title}</p>
                </div>
            )}
            </div>
        ))}
    </div>
  )
}

import React, { createContext, useContext, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import ResultContext, { useResultContext } from '../contexts/ResultContextProvider'
import { Test } from './Images'

export const Results = () => {
    const {results,loading,getResults,searchTerm}=useContext(ResultContext)
    const location=useLocation()

    useEffect(()=>{
        if(searchTerm){
            if(location.pathname==='/videos'){
        getResults('/search/q=${searchTerm} videos')
            }else{

                getResults(`${location.pathname}/q=${searchTerm}&num=2`)
            }
        }
        
    },[searchTerm,location.pathname])
    if(loading) {
        return <h1>loading...</h1>
    }
    else{
        
  switch (location.pathname) {
        case '/search':
        return (
            
           
                <div className='felx flex-wrap justify-between space-y-6 sm:px-8'>
                {results?.results?.map(({link,title},index)=>(
                    
                    <div key={index} className='md:w-2/3 w-full '>
                        <a href={link} target="_blank" rel='noreferrer'>
                                <p className='text-sm'>
                                    {link.length>30? link.substring(0,30):link}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700 '>{title}</p>
                        </a>
                    </div>
                ))}
                </div>
            
            );
        case '/images':
          return (<Test results={results}/>);
        case '/news':
          return 'SEARCH';
        case '/videos':
          return 'SEARCH';
          
      default:
          return 'ERROR';
  }}
}

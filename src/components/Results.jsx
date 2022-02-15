import React, { createContext, useContext, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import ResultContext, { useResultContext } from '../contexts/ResultContextProvider'
import { Images } from './Images'
import { News } from './News'
import { Search } from './Search'

export const Results = () => {
    const {results,loading,getResults,searchTerm}=useContext(ResultContext)
    const location=useLocation()

    useEffect(()=>{
        if(searchTerm){
            if(location.pathname==='/videos'){
        getResults('/search/q=${searchTerm} videos')
            }else{

                getResults(`${location.pathname}/q=${searchTerm}&num=10`)
            }
        }
        
    },[searchTerm,location.pathname])
    if(loading) {
        return <h1>loading...</h1>
    }
    else{
        
  switch (location.pathname) {
        case '/search':
        return (<Search results={results}/>)
        case '/images':
            
          return (
              <Images image_results={results}/>
            
          );
        case '/news':
          return (<News results={results}/>)
        case '/videos':
          return 'SEARCH';
          
      default:
          return 'ERROR';
  }}
}

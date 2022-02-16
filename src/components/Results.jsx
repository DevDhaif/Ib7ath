import React, { createContext, useContext, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import ResultContext, { useResultContext } from '../contexts/ResultContextProvider'
import { Images } from './Images'
import { News } from './News'
import { All } from './All'
import { Videos } from './Videos'

export const Results = () => {
    const {results,loading,getResults,searchTerm}=useContext(ResultContext)
    const location=useLocation()

    useEffect(()=>{
        if(searchTerm){
            if(location.pathname==='/videos'){
        getResults(`/search/q=${searchTerm} videos`)
            }else{

                getResults(`${location.pathname}/q=${searchTerm}&num=30`)
            }
        }
        
    },[searchTerm,location.pathname])
    if(loading) {
        return <h1>loading...</h1>
    }
    else{
        
  switch (location.pathname) {

        case '/search':
            return (<All results={results}/>)
        case '/images':
            return (<Images image_results={results}/>);
        case '/news':
          return (<News results={results}/>)
        case '/videos':
          return (<Videos results={results}/>);
          
        default:
          return 'ERROR';
  }}
}

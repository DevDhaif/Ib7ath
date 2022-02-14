import {createContext ,useContext,useState} from 'react'

const ResultContext=createContext();
const baseUrl='https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider=({children})=>{
    const [results,setResults]=useState([])
    const [loading,setLoading]=useState(false)
    const [searchTerm,setSearchTerm]=useState('')

    
    const getResults=async (type)=>{

        setLoading(true)

        const response=await fetch(`${baseUrl}${type}`,{
            method:"GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'a5990e9e61mshcc17f1aac7fdd5ap12a58ajsn263efd24ef47'
              }
        })

        const data=await response.json()
        console.log(data);
        setResults(data)
        setLoading(false)
    }
    return (
        <ResultContext.Provider value={{getResults,results,loading,searchTerm,setSearchTerm}}>
        {children}
        </ResultContext.Provider>
    )

}

export default ResultContext;
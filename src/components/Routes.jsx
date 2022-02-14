import React from 'react'
import {Routes,  BrowserRouter as Router,Route,Switch, Navigate,Redirect} from 'react-router-dom'
import App from '../App'
import { Navbar } from './Navbar'
import { Results } from './Results'
export const Routess = () => {
  return (
    
      <div className='p-4'>
          <Routes>
            <Route exat path='/' element={<Navigate replace to="/search" />}/>
            {/* 
            <Route exat path={['/search']} element={<Results/>}/>
            */}
            {["/search", "/images",'news','videos'].map(path => (
              <Route exat
                key={'Results'}
                path={path}
                element={<Results />}
              />
            ))}
          </Routes>     
      </div>
    
  )
}

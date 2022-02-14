import { useState } from 'react';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar'
import {Routes, Routess} from './components/Routes'

function App() {
  const [darkTheme,setDarkTheme]=useState(true)
  
  return (
    <div className={darkTheme?'dark':''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen'>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          <Routess/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;

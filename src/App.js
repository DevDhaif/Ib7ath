import { useState } from 'react';
import { Footer } from './components/Footer';
import {Navbar} from './components/Navbar'
import {Routes} from './components/Routes'

function App() {
  const [darkTheme,setDarkTheme]=useState(true)
  return (
    <div className={darkTheme?'dark':''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen'>
          <Navbar/>
          <Footer/>
          <Routes/>
      </div>
    </div>
  );
}

export default App;

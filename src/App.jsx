import React, { useEffect } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import useLenis from './components/lenis';


const App = () => {
  return (
    <div className='w-full '>
      <Header/>
      <Main />
    </div>
  )
}

export default App
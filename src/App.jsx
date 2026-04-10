import React, { useEffect } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import DarkLightThemeProvider from './components/DarkLightThemeProvider';


const App = () => {
  return (
    <div className='w-full '>
      <BrowserRouter>
        <DarkLightThemeProvider>
          <Header />
          <Main />
        </DarkLightThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MyRouter from './Router/MyRouter';


export const MyThemeContext = createContext()

function App() {

  const [myTheme, setMyTheme] = useState({
      color: "",
      background: "linear-gradient(#E0A414,#1A3478)",
  });

  useEffect(()=> {
    document.body.style.background = myTheme.background
  },[myTheme])


  
  return (
      <>
          <MyThemeContext.Provider value={[myTheme, setMyTheme]}>
              <BrowserRouter>
                  <MyRouter />
              </BrowserRouter>
          </MyThemeContext.Provider>
      </>
  );
}

export default App;

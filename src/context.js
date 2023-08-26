import React from 'react'
import { useContext, useState } from 'react';

const AppContext= React.createContext();

const AppProvider = ({children}) => {

  const [menuOpen, setMenuOpen]= useState(false);

//   const showMenu = ()=>{
//     setMenuOpen(!menuOpen)
// }
  
  return (
    <AppContext.Provider value={{
      menuOpen,
      // showMenu,
      setMenuOpen
    }}>
        
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext= ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}

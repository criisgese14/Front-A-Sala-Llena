import React, {useState} from 'react'



const Context = React.createContext({})

export function UserContextProvider ({children}) {
  
  const [status, setStatus] = useState(
    () => window.sessionStorage.getItem('status')
  )
  
  

  return <Context.Provider value={{
    status,
    setStatus,
    
  }}>
    {children}
  </Context.Provider>
}

export default Context;
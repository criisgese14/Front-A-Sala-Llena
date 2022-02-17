import React, {useState} from 'react'



const Context = React.createContext({})

export function UserContextProvider ({children}) {
  
  const [status, setStatus] = useState(
    () => window.sessionStorage.getItem('status')
  );
  const [loginData, setLoginData] = useState(
    () => window.sessionStorage.getItem('loginData')
  );
  const [id,setId] = useState(
    () => window.sessionStorage.getItem('id')
  )
  ;
  
  

  return <Context.Provider value={{
    status,
    setStatus,
    loginData,
    setLoginData,
    id,
    setId
  }}>
    {children}
  </Context.Provider>
}

export default Context;
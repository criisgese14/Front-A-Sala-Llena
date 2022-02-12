import React, {useState} from 'react'



const Context = React.createContext({})

export function UserContextProvider ({children}) {
  const [favs, setFavs] = useState([])
  const [key, setKey] = useState(
    () => window.sessionStorage.getItem('key')
  )
  const [id,setId] = useState(
    () => window.sessionStorage.getItem('id')
  )
  const [rol,setRol] = useState(
    () => window.sessionStorage.getItem('rol')
  )

  const[roles,setRoles] = useState(
    () => window.sessionStorage.getItem('roles')
  )

  

  return <Context.Provider value={{
    rol,
    key,
    setRol,
    setKey,
    id,
    setId,
    roles,
    setRoles
  }}>
    {children}
  </Context.Provider>
}

export default Context;
import {useCallback, useContext, useState} from 'react'
import Context from '../context/UserContext.js';
import {loginTheater, loginViewer} from '../redux/actions/index.js';


const useUser = () => {
  const {rol, key, id, setRol, setKey, setId, roles, setRoles} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })
  

  const login = useCallback((input) => {
    setState({loading: true, error: false })
    loginTheater(input)
        .then(data => {
          window.sessionStorage.setItem('key', data.token)
          window.sessionStorage.setItem('id', data.id)
          window.sessionStorage.setItem('roles', data.isTheater)
        setState({loading: false, error: false })
        setKey(data.token)
        setId(data.id)
        setRoles(data.isTheater)
      })
      .catch(err => {
        window.sessionStorage.removeItem('key')
        window.sessionStorage.removeItem('id')
        window.sessionStorage.removeItem('roles')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setKey,setId,setRoles])

  const loginviewer = useCallback((input) => {
    setState({loading: true, error: false })
    loginViewer(input)
        .then(data => {
        window.sessionStorage.setItem('key', data.token)
        window.sessionStorage.setItem('id', data.id)
        window.sessionStorage.setItem('rol', data.isViewer)
        setState({loading: false, error: false })
        setKey(data.token)
        setId(data.id)
        setRol(data.isViewer)
      })
      .catch(err => {
        window.sessionStorage.removeItem('key')
        window.sessionStorage.removeItem('id')
        window.sessionStorage.removeItem('rol')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setKey,setId,setRol])

  

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('key')
    window.sessionStorage.removeItem('id')
    window.sessionStorage.removeItem('rol')
    window.sessionStorage.removeItem('roles')
    setKey(null)
    setId(null)
    //setRol(null)
    window.location.href="http://localhost:3000"
  }, [setKey,setId,setRol])

  return {
    
    isLogged: Boolean(key),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    loginviewer,
    id,
    rol,
    roles
  }
} 

export default useUser;
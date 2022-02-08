import {useCallback, useContext, useState} from 'react'
import Context from '../context/UserContext.js';
import {loginTheater, loginViewer} from '../redux/actions/index.js';
//import addFavService from 'services/addFav'

const useUser = () => {
  const {favs, jwt, setFavs, setJWT} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })
  

  const login = useCallback((input) => {
    setState({loading: true, error: false })
    loginTheater(input)
        .then(jwt => {
          
        window.sessionStorage.setItem('jwt', jwt)
        
        setState({loading: false, error: false })
        setJWT(jwt)
        console.log(jwt)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setJWT])

  const loginviewer = useCallback((input) => {
    setState({loading: true, error: false })
    loginViewer(input)
        .then(jwt => {
          
        window.sessionStorage.setItem('jwt', jwt)
        
        setState({loading: false, error: false })
        setJWT(jwt)
        console.log(jwt)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setJWT])

  /*const addFav = useCallback(({id}) => {
    addFavService({id, jwt})
      .then(setFavs)
      .catch(err => {
        console.error(err)
      })
  }, [jwt, setFavs]) */

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJWT(null)
    window.location.href="http://localhost:3000"
  }, [setJWT])

  return {
    //addFav,
    //favs,
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    loginviewer
  }
} 

export default useUser;
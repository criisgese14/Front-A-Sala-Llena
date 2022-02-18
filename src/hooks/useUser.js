import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext.js";
import { loginTheater, loginViewer } from "../redux/actions/index.js";


const useUser = () => {
  const { status, setStatus,loginData,setLoginData,id,setId} = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  

  const login = useCallback(
    (input) => {
      setState({ loading: true, error: false });
      loginTheater(input)
        .then((data) => {
          window.sessionStorage.setItem("status", data.isLogged);
          
          setState({ loading: false, error: false });
          setStatus(data.isLogged);
          
        })
        .catch((err) => {
          window.sessionStorage.removeItem("status");
          
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setStatus]
  );

  const loginviewer = useCallback(
    (input) => {
      setState({ loading: true, error: false });
      loginViewer(input)
        .then((data) => {
          window.sessionStorage.setItem("status", data.isLogged);
          
          setState({ loading: false, error: false });
          setStatus(data.isLogged);
          
        })
        .catch((err) => {
          window.sessionStorage.removeItem("status");
          
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setStatus]
  );

  const googleLoginViewer = async (googleData) => {
    const res = await fetch('http://localhost:3001/login/google/viewer', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await res.json();
    setLoginData(data.token);
    
    sessionStorage.setItem('loginData', JSON.stringify(data.token));
    sessionStorage.setItem('id', JSON.stringify(data.id));
    
  };
  
  const googleLoginTheater = async (googleData) => {
    const res = await fetch('http://localhost:3001/login/google/theater', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await res.json();
    setLoginData(data.token);
    
    sessionStorage.setItem('loginData', JSON.stringify(data.token));
    sessionStorage.setItem('id', JSON.stringify(data.id));
    
    
  };
 

   const logout = useCallback(() => {
    window.sessionStorage.removeItem("status");
    window.sessionStorage.removeItem("loginData");
    window.sessionStorage.removeItem("id");
    
    
    setStatus(null);
    setLoginData(null);
    setId(null);
    window.location.href="http://localhost:3000/"
  }, [setStatus,setLoginData,setId])

  return {
    isLogged: Boolean(status),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    loginviewer,
    googleLoginViewer,
    googleLoginTheater,
    
    
    
  };
};

export default useUser;

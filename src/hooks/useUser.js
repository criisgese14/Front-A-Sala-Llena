import { useCallback, useContext, useState } from "react";
import Context from "../context/UserContext.js";
import { loginTheater, loginViewer } from "../redux/actions/index.js";

const useUser = () => {
  const { status, setStatus} = useContext(Context);
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

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("status");
    
    setStatus(null);
    
    //setRol(null)
    window.location.href="http://localhost:3000/"
  }, [setStatus])

  return {
    isLogged: Boolean(status),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    loginviewer,
    
  };
};

export default useUser;

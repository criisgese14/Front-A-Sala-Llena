import {Route, Redirect, useLocation} from 'react-router-dom';
import useUser from '../hooks/useUser.js';
import React from 'react';



const PrivateRouteHomeV = ({component:Component,...rest}) => {
    const {isLogged,id,rol,logaout} = useUser();
    const {pathname} = useLocation();
    
    console.log('loged',isLogged)
    console.log('id',id)
    console.log('params',pathname)
    console.log('rol',rol)

    function logOut(){
        window.sessionStorage.removeItem('key')
        window.sessionStorage.removeItem('id')
        window.sessionStorage.removeItem('rol')
        
    }

    return (
        <Route {...rest}>
            {isLogged && pathname === `/viewerHome/${id}` && rol ? 
            <Component/> :  <Redirect to='/loginviewer'/>}
        </Route>
    )
}

export default PrivateRouteHomeV;
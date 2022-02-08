import {Route, Redirect} from 'react-router-dom';
import useUser from './hooks/useUser.js';

let auth;
auth=true;
auth=null;

const PrivateRoute = ({component:Component,...rest}) => {
    const {isLogged} = useUser();
    console.log(isLogged)
    return (
        <Route {...rest}>
            {isLogged ? <Component/> : <Redirect to='/'/>}
        </Route>
    )
}

export default PrivateRoute;
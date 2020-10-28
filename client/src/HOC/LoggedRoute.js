import { useContext } from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom';
import { Context } from '../context/AuthContext'



const LoggedRoute = ({children, ...rest}) => {


    const { loggedUser, isLogged } = useContext(Context);

    return (
        <Route {...rest} render={({ location }) => 
        isLogged  
        ? children
        : <Redirect to={{
              pathname: "/login",
              state: { from: location }
            }} />
            }
        />
    )
    

};
export default LoggedRoute;
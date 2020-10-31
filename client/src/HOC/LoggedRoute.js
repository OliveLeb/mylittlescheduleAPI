import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { Context as AuthContext} from '../context/AuthContext'



const LoggedRoute = ({children, ...rest}) => {
    
    const { isLogged } = useContext(AuthContext);

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
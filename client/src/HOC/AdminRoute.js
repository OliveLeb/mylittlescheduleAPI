import { useContext } from 'react'
import { Redirect, Route} from 'react-router-dom';
import { Context as AuthContext} from '../context/AuthContext';

const AdminRoute = ({children,rest}) => {

    const { loggedUser, isLogged } = useContext(AuthContext);

    return (
     
        <Route {...rest} render={({location}) => 
        isLogged && loggedUser.is_admin 
        ? children
        : <Redirect to={{
            pathname: '/',
            state: { from :location}
        }} />
            }
        />

    )
    

};
export default AdminRoute;
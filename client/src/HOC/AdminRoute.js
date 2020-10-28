import { useContext } from 'react'
import { Redirect, Route} from 'react-router-dom';
import { Context } from '../context/AuthContext'



const AdminRoute = ({children, ...rest}) => {


    const { loggedUser, isLogged } = useContext(Context);

    return (
        <Route {...rest} render={({ location }) => 
        isLogged && loggedUser.is_admin 
        ? children
        : <Redirect to='/' />
            }
        />
    )
    

};
export default AdminRoute;
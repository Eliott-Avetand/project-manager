import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
    const hasJWT = () => {
        let flag = false;
        const token = Cookies.get('token');

        token && token !== '' ? flag=true : flag=false;
        return flag;
    }
 
    return (hasJWT()
        ? children
        : <Navigate to='/auth/login' />
    );
};
 
export default PrivateRoute;
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AuthRoute = ({ children }) => {
    const hasJWT = () => {
        let flag = false;
        const token = Cookies.get('token');

        token && token !== '' ? flag=true : flag=false;
        return flag;
    }

    return hasJWT() ? <Navigate to='/' /> : children
};
 
export default AuthRoute;
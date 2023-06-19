import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const hasJWT = () => {
        let flag = false;
        const token = localStorage.getItem('user');

        token && token !== '' ? flag=true : flag=false;
        return flag;
    }

    return hasJWT() ? <Navigate to='/dashboard' /> : children
};
 
export default AuthRoute;
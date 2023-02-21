import { Navigate } from 'react-router-dom';

const AuthRoute = ({ children }) => {
    const hasJWT = () => {
        let flag = false;

        localStorage.getItem("token") ? flag=true : flag=false;
        return flag;
    }

    return hasJWT() ? <Navigate to='/' /> : children
};
 
export default AuthRoute;
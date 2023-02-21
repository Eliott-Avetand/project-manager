import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const hasJWT = () => {
        let flag = false;

        localStorage.getItem("token") ? flag=true : flag=false;
        return flag;
    }
 
    return (hasJWT()
        ? children
        : <Navigate to='/auth/login' />
    );
};
 
export default PrivateRoute;
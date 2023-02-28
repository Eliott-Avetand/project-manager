import { customRoutes } from './Routes';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import PrivateRoute from '@components/RouteGuard/PrivateRoute';
import AuthRoute from '@components/RouteGuard/AuthRoute';
import { useContext, useEffect, useState } from 'react';
import ThemeContext from '@styles/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const noNavbar = ['/', '/auth/login'];
    const { isDark } = useContext(ThemeContext);
    const [isLogout, setIsLogout] = useState(false);
    const action = useSelector(state => state.userReducer.action);

    useEffect(() => {
        if (action === 'user/logoutSuccess')
            setIsLogout(true);
    }, [dispatch, setIsLogout, action]);

    const routes = customRoutes.map((route, index) => {
        const Component = route.component;

        if (route.type === 'private')
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={<PrivateRoute><Component /></PrivateRoute>}
                />
            )
        else if (route.type === 'auth') {
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={<AuthRoute><Component /></AuthRoute>}
                />
            )
        } else
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={<Component />}
                />
            )
    });
    
    if (isLogout) {
        setIsLogout(false);
        return <Navigate to='/auth/login' />
    }

    return (
        <div style={{ height: '100%', width: '100%' }} className={`${isDark ? 'theme--dark' : 'theme--light'}`}>
            { noNavbar.includes(location.pathname) ? <></> : <Navbar /> }
            <ToastContainer />
            <Routes>
                {routes}
            </Routes>
        </div>
    );
}

export default App;

import { customRoutes } from './Routes';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import PrivateRoute from '@components/RouteGuard/PrivateRoute';
import AuthRoute from '@components/RouteGuard/AuthRoute';

const App = () => {
    const location = useLocation();
    const noNavbar = ['/', '/auth/login']

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

    return (
        <div style={{ height: '100%', width: '100%' }}>
            { noNavbar.includes(location.pathname) ? <></> : <Navbar /> }
            <Routes>
                {routes}
            </Routes>
        </div>
    );
}

export default App;

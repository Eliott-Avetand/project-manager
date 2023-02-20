import { customRoutes } from './Routes';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';

const App = () => {
    const location = useLocation();
    const noNavbar = ['/', '/login']

    const routes = customRoutes.map((route, index) => {
        const Component = route.component;

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

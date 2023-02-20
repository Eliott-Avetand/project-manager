import Archives from './Views/Archives/Archives';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import Sprint from './Views/Sprint/Sprint';
import Admin from './Views/Admin/Admin';
import Users from './Views/Forms/Users/Users';

export const customRoutes = [
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/current-sprint', component: Sprint },
    { path: '/sprints', component: Archives },
    { path: '/admin', component: Admin },
    { path: '/create-user', component: Users },
];
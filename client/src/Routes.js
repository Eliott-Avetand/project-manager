import Archives from '@views/Archives/Archives';
import Home from '@views/Home/Home';
import Login from '@views/Login/Login';
import Sprint from '@views/Sprint/Sprint';
import Admin from '@views/Admin/Admin';
import Users from '@views/Forms/Users/Users';

export const customRoutes = [
    { path: '/auth/login', component: Login, type: 'auth' },
    { path: '/', component: Home, type: 'private' },
    { path: '/current-sprint', component: Sprint, type: 'private' },
    { path: '/sprints', component: Archives, type: 'private' },
    { path: '/admin', component: Admin, type: 'private' },
    { path: '/create-user', component: Users, type: 'private' },
];
import Archives from '@views/Archives/Archives';
import Home from '@views/Home/Home';
import Login from '@views/Login/Login';
import Sprint from '@views/Sprint/Sprint';
import Admin from '@views/Admin/Admin';
import Users from '@views/Forms/Users/Users';

export const customRoutes = [
    { path: '/login', component: Login },
    { path: '/', component: Home },
    { path: '/current-sprint', component: Sprint },
    { path: '/sprints', component: Archives },
    { path: '/admin', component: Admin },
    { path: '/create-user', component: Users },
];
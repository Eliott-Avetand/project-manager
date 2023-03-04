import Dashboard from '@views/Dashboard/Dashboard';
import Login from '@views/Login/Login';
import Sprint from '@views/Sprint/Sprint';
import Admin from '@views/Admin/All/Admin';
import CreateUsers from '@views/Admin/CreateUsers/CreateUsers';
import Sprints from '@views/Sprints/All/Sprints';
import CreateSprints from '@views/Sprints/CreateSprints/CreateSprints';
import UpdateSprints from '@views/Sprints/UpdateSprints/UpdateSprints';
import UpdateUsers from '@views/Admin/UpdateUsers/UpdateUsers';

export const customRoutes = [
    { path: '/auth/login', component: Login, type: 'auth' },
    { path: '/dashboard', component: Dashboard, type: 'private' },
    { path: '/sprints', component: Sprints, type: 'private' },
    { path: '/sprints/:id', component: Sprint, type: 'private' },
    { path: '/create-sprint', component: CreateSprints, type: 'private' },
    { path: '/update-sprint/:id', component: UpdateSprints, type: 'private' },
    { path: '/admin-panel', component: Admin, type: 'private' },
    { path: '/create-user', component: CreateUsers, type: 'private' },
    { path: '/update-user/:id', component: UpdateUsers, type: 'private' },
];
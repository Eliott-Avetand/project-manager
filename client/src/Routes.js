import Home from '@views/Home/Home';
import Login from '@views/Login/Login';
import Sprint from '@views/Sprint/Sprint';
import Admin from '@views/Admin/All/Admin';
import CreateUsers from '@views/Admin/CreateUsers/CreateUsers';
import Sprints from '@views/Sprints/All/Sprints';
import CreateSprints from '@views/Sprints/CreateSprints/CreateSprints';
import UpdateSprints from '@views/Sprints/UpdateSprints/UpdateSprints';

export const customRoutes = [
    { path: '/auth/login', component: Login, type: 'auth' },
    { path: '/', component: Home, type: 'private' },
    { path: '/sprints', component: Sprints, type: 'private' },
    { path: '/sprints/:id', component: Sprint, type: 'private' },
    { path: '/create-sprint', component: CreateSprints, type: 'private' },
    { path: '/update-sprint/:id', component: UpdateSprints, type: 'private' },
    { path: '/admin', component: Admin, type: 'private' },
    { path: '/create-user', component: CreateUsers, type: 'private' },
];
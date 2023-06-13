import Login from '@views/Login/Login';
import Dashboard from '@views/Dashboard/Dashboard';
import Admin from '@views/Admin/All/Admin';
import CreateUsers from '@views/Admin/CreateUsers/CreateUsers';
import UpdateUsers from '@views/Admin/UpdateUsers/UpdateUsers';
import Sprint from '@views/Sprint/All/Sprint';
import CreateCard from '@views/Sprint/CreateCard/CreateCard';
import Sprints from '@views/Sprints/All/Sprints';
import CreateSprints from '@views/Sprints/CreateSprints/CreateSprints';
import UpdateSprints from '@views/Sprints/UpdateSprints/UpdateSprints';
import Export from '@views/Sprints/Export/Export';
import Roadmap from './views/Roadmap/Roadmap';
import CreateDeliverable from './views/Sprints/CreateDeliverable/CreateDeliverable';

export const customRoutes = [
    { path: '/auth/login', component: Login, type: 'auth' },
    { path: '/dashboard', component: Dashboard, type: 'private' },
    { path: '/roadmap', component: Roadmap, type: 'private' },
    { path: '/admin-panel', component: Admin, type: 'private' },
    { path: '/create-user', component: CreateUsers, type: 'private' },
    { path: '/update-user/:id', component: UpdateUsers, type: 'private' },
    { path: '/sprints/:id', component: Sprint, type: 'private' },
    { path: '/sprints/:id/export', component: Export, type: 'private' },
    { path: '/sprints/:id/create-card', component: CreateCard, type: 'private' },
    { path: '/sprints', component: Sprints, type: 'private' },
    { path: '/create-sprint', component: CreateSprints, type: 'private' },
    { path: '/create-deliverable', component: CreateDeliverable, type: 'private' },
    { path: '/update-sprint/:id', component: UpdateSprints, type: 'private' },
];
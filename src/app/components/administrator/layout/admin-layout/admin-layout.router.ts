import { Routes } from '@angular/router';
import { UserComponent } from '../../content/user/user.component';
import { AuthorityComponent } from '../../content/authority/authority.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'authorities',
        component: AuthorityComponent
    }
];

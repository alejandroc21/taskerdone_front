import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'', loadComponent: () => import('./pages/presentation/presentation.component'),
        canActivate: [authGuard],
        children:[
            {
                path:'login', loadComponent: () => import('./components/auth/login/login.component'),
                canActivate: [authGuard]
            },
            {
                path:'register', loadComponent: () => import('./components/auth/register/register.component'),
                canActivate: [authGuard]
            }
        ]
    },
    {
        path:'home', loadComponent: () => import('./pages/home/home.component'),
        canActivate: [authGuard]
    },
    {
        path:'**', redirectTo: '', pathMatch: 'full'
    }
];

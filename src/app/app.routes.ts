import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'', loadComponent: () => import('./pages/public/public.component'),
        canActivate: [authGuard],
        children:[
            {
                path:'', loadComponent: () => import('./pages/presentation/presentation.component')
            },
            {
                path:'login', loadComponent: () => import('./components/auth/login/login.component'),
            },
            {
                path:'register', loadComponent: () => import('./components/auth/register/register.component'),
            }
        ]
    },
    {
        path:'home', loadComponent: () => import('./pages/private/private.component'),
        canActivate: [authGuard],
        children:[
            {
                path:'', loadComponent: () => import('./pages/home/home.component')
            },
            {
                path:'project/:id', loadComponent: () => import('./pages/project/project.component')
            }
        ]
    },
    {
        path:'**', redirectTo: '', pathMatch: 'full'
    }
];

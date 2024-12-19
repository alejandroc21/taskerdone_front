import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'', loadComponent: () => import('./pages/presentation/presentation.component'),
        children:[
            {
                path:'login', loadComponent: () => import('./components/auth/login/login.component')
            },
            {
                path:'register', loadComponent: () => import('./components/auth/register/register.component')
            }
        ]
    },
    {
        path:'home', loadComponent: () => import('./pages/home/home.component')
    },
    {
        path:'**', redirectTo: '', pathMatch: 'full'
    }
];

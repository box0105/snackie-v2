import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import("./home/home").then(m => m.Home)
    },
    {
        path: 'menu',
        pathMatch: 'full',
        loadComponent: () => import("./menu/menu").then(m => m.Menu)
    },
];

import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Product } from './product/product';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [

    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'product/:id', component: Product },

    { path: '', redirectTo: '/login', pathMatch: 'full' },

];

import { Routes } from '@angular/router';
import { HomeComp } from './home-comp/home-comp';
import { ContactComp } from './contact-comp/contact-comp';
import { AboutComp } from './about-comp/about-comp';

export const routes: Routes = [
    { path: '', component: HomeComp },
    { path: 'about', component: AboutComp },
    { path: 'contact', component: ContactComp },

];

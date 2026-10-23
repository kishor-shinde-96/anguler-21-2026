import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';
import { AboutComponent } from './about-component/about-component';
import { PageNotFound } from './page-not-found/page-not-found';


export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: '**', component: PageNotFound},

];

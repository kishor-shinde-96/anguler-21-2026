import { Service, signal, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})


export class Auth {
    isLoggedIn = signal(false);

    login() {
        this.isLoggedIn.set(true);
        console.log('login');
    }

    logout() {
        this.isLoggedIn.set(false);
        console.log('logout');
    }
}

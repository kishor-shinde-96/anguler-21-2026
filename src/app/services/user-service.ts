import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    getUsers() {
        return this.http.get<User[]>(this.apiUrl);
    }


    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl, user);
    }

    // update existing user

    updateUser(id: number, user: User): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/${id}`, user);
    }

    updateUserStatus(id: number, isActive: boolean): Observable<User> {
        return this.http.patch<User>(`${this.apiUrl}/${id}`, { isActive });
    }

    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

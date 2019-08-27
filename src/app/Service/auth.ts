import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../models/User';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class authService {
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
     }
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public get currentUserValue(): User {
        debugger;
        return this.currentUserSubject.value;
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    login(email:string,password:string){
        debugger;
        var userData = "username=" + email+ "&password=" +password + "&grant_type=password";

        return this.http.post<User>(`${environment.apiUrl}/token`,userData)
        .pipe(map(user => {
           // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
          //  user.authdata = window.btoa(username + ':' + password);
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }))

        
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
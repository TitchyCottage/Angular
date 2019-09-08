import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { UserDetails } from '../models/UserDetails';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class userService {
    constructor(private http: HttpClient) {
       
     }
   
     GetUserByEmail(email){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Account/GetUserAsync`+'?email='+email)
        .pipe(map(User => {
            debugger;
            return User.data;
        }))

        
    }

     
    GetDistibutors(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Account/GetDistributor`)
        .pipe(map(User => {
            debugger;
            return User.data;
        }))  
    }

    GetRetailer(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Account/GetRetailerByDistributor`)
        .pipe(map(User => {
            debugger;
            return User.data;
        }))  
    }

    GetRoles(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Account/GetTitchyCottageType`)
        .pipe(map(role => {
            debugger;
            return role;
        }))

        
    }

    
    SaveUser(data:UserDetails,isEdit:boolean){
        debugger;
        if(isEdit){
            return this.http.post<any>(`${environment.apiUrl}/api/Account/UpdateUserAsync`,data)
            .pipe(map(user => {
                debugger;
                return user;;
            }));
        }else{
            return this.http.post<any>(`${environment.apiUrl}/api/Account/Register`,data)
            .pipe(map(user => {
                debugger;
                return user;;
            }));
        }
 
    }

    
}
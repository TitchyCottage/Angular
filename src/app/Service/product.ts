import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class productService {
    constructor(private http: HttpClient) {
       
     }
   
     
    GetProducts(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Product/GetProducts`)
        .pipe(map(product => {
            debugger;
            return product.data;
        }))

        
    }

}
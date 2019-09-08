import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product, ProductQuantity } from '../models/product';
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

    
    SaveProduct(data:Product){
        debugger;
        return this.http.post<any>(`${environment.apiUrl}/api/Product/AddOrUpdateProduct`,data)
        .pipe(map(user => {
            debugger;
            return user;;
        }));

    }

    GetProductQuantity(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Product/GetProductQuantityList`)
        .pipe(map(product => {
            debugger;
            return product.data;
        }))
    }

    SaveProductQuantity(data:ProductQuantity){
        debugger;
        return this.http.post<any>(`${environment.apiUrl}/api/Product/AddOrUpdateProductQuantity`,data)
        .pipe(map(data => {
            debugger;
            return data;
        }));
    }

    GetProductQuantityById(id:number){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Product/GetProductQuantityByProductId?ID=`+id)
        .pipe(map(product => {
            debugger;
            return product.data;
        }))
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ShopTransactionModel,CheckOutRequestModel} from '../models/Transaction';
// import { Product, ProductQuantity, DistibutorDashboardRequestModel } from '../models/product';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class transactionService {
    constructor(private http: HttpClient) {
       
     }
   
     
    GetProductQuantity(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Product/GetProductQuantityList`)
        .pipe(map(product => {
            debugger;
            return product.data;
        }))  
    }

    GetShopList(){
        debugger;
        return this.http.get<any>(`${environment.apiUrl}/api/Account/GetRetailerByDistributor`)
        .pipe(map(user => {
            debugger;
            return user.data;
        }))  
    }


    
    Checkin(data:ShopTransactionModel){
        debugger;
        return this.http.post<any>(`${environment.apiUrl}/api/Transaction/CheckInByShop`,data)
        .pipe(map(data => {
            debugger;
            return data;
        }));

    }
    
    Checkout(data:CheckOutRequestModel){
        debugger;
        return this.http.post<any>(`${environment.apiUrl}/api/Transaction/CheckOutFromShop`,data)
        .pipe(map(data => {
            debugger;
            return data;
        }));

    }

}
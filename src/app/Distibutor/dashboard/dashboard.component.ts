import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { productService } from '../../Service/product';
import { transactionService } from '../../Service/transaction';
import { userService } from '../../Service/user';
import { Product, DistibutorDashboardRequestModel, ProductQuantity } from '../../models/Product';
import {UserDetails} from '../../models/UserDetails';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addDashboardForm: FormGroup;
  loading = false;
  hasError = false;
  hasSuccess = false;
  submitted = false;
  returnUrl: string;
  error = '';
  success ='';
  products: Product[];
  productQuantity: ProductQuantity[];
  dashboardView:DistibutorDashboardRequestModel[];
  distibutorList : UserDetails[];

  constructor(
    private _product: productService, 
    private _transaction: transactionService, 
    private _user: userService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.addDashboardForm = this.formBuilder.group({
      productName: [''],
      lot: [''],
      expiredDate: [''],
      distibutorId:['']
  });

  this.GetProductList();
  this.GetProductQuantity();
  this.GetDistibutor();
  let requestData  = {} as DistibutorDashboardRequestModel;
  this.SearchProductsForDistibutor(requestData);
  }

  Cancel(){
    
    this.addDashboardForm = this.formBuilder.group({
      productName: [''],
      lot: [''],
      expiredDate: [''],
      distibutorId:['']
  });
  let requestData  = {} as DistibutorDashboardRequestModel;
  this.SearchProductsForDistibutor(requestData);
  }

  GetDistibutor(){
    debugger;
    this._user.GetDistibutors()
    .subscribe(
        data => {
         debugger;
         this.distibutorList =data;
        },
        error => {
          debugger;
          
        });
    }

  GetProductQuantity(){
    this._transaction.GetProductQuantity()
    .subscribe(
        data => {
         debugger;
         this.productQuantity =data;
        },
        error => {
          debugger;
          
        });
    }

  GetProductList(){
    this._product.GetProducts()
    // .pipe(first())
    .subscribe(
        data => {
  
         debugger;
         this.products =data;
        },
        error => {
          debugger;
          
        });
    }

    SearchProductsForDistibutor(data:DistibutorDashboardRequestModel){
      this._product.SearchProductsForDistibutor(data)
      // .pipe(first())
      .subscribe(
          data => {
           this.dashboardView =data;
          },
          error => {
          });
      }

    get data() { return this.addDashboardForm.controls; }

  onSubmit(){
    debugger;
    
     // stop here if form is invalid
     if (this.addDashboardForm.invalid) {
      return;
  }

  let user = this.distibutorList.filter(
    f => f.fullName === this.data.distibutorId.value);

  let distibutorId = '';
  if(user.length){
    distibutorId = user[0].id;
  }

    let requestData  = {} as DistibutorDashboardRequestModel;
    requestData.productName = this.data.productName.value;
    requestData.lot = this.data.lot.value;
    requestData.ExpiredDate = this.data.expiredDate.value;
    requestData.DistibutorId = distibutorId;

    this.SearchProductsForDistibutor(requestData);
  }
}

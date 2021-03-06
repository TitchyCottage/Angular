import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { productService } from '../../Service/product';
import { transactionService } from '../../Service/transaction';
import { UserDetails } from '../../models/UserDetails';
import { Product, DistibutorDashboardRequestModel, ProductQuantity } from '../../models/Product';
import {CheckOutRequestModel} from '../../models/Transaction';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  checkOutForm: FormGroup;
  loading = false;
  hasError = false;
  hasSuccess = false;
  submitted = false;
  returnUrl: string;
  error = '';
  success ='';
  products: ProductQuantity[];
  shops:UserDetails[];
  
  constructor(
    private _product: productService, 
    private _transaction: transactionService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.InitiateForm();
    this.GetProductList();
    this.GetShopList();
  }


  InitiateForm(){
    this.checkOutForm = this.formBuilder.group({
      shopName:['',Validators.required],
      lot: ['',Validators.required],
      productName: ['',Validators.required],
      expiredDate:['',Validators.required],
      //availableQty:['',Validators.required],
      quantity:['',Validators.required],
      isReturn:[false,Validators.required]
    });

  }
  get data() { return this.checkOutForm.controls; }

  OnLotChange(){
debugger;
let data = this.products.filter(
  f => f.lot === this.data.lot.value);

  if(data.length){
   this.checkOutForm.controls.productName.setValue(data[0].productName);
   this.checkOutForm.controls.expiredDate.setValue( this.currentDate(data[0].expiredDate ));
  // this.checkOutForm.controls.availableQty.setValue(data[0].stockInQuantity);
  }
  }

  currentDate(date) {
    debugger;
    if(date){
      const currentDate = new Date(date);
      return currentDate.toLocaleDateString();
    }
  }

  onSubmit(){
    debugger;
    this.submitted =true;
    // stop here if form is invalid
    if (this.checkOutForm.invalid) {
      return;
    }

    let data = this.products.filter(
      f => f.lot === this.data.lot.value);

      let user = this.shops.filter(
        f => f.shopName === this.data.shopName.value);

      let productID = 0;
      let productQuantityID = 0;
      let shopId ='';

    if(data.length){
      productID = data[0].productID;
      productQuantityID = data[0].id;
    }

    if(user.length){
      shopId = user[0].id;
    }

    let requestData  = {} as CheckOutRequestModel;
    requestData.productID = productID;
    requestData.productQuantityID = productQuantityID;
    requestData.shopID = shopId;
    requestData.quantity = this.data.quantity.value;
    requestData.isreturn = this.data.isReturn.value;
    this._transaction.Checkout(requestData)
    .pipe(first())
    .subscribe(
        data => {
          debugger;
          if(data.success){
            this.submitted =false;
            this.hasSuccess = true;
            this.success = data.message;
            this.Cancel();
            this.GetProductList();
          }else{
            this.hasError = true;
            this.error = data.message;
          }
          
        },
        error => {
          debugger;
          this.hasError = true;
          this.error = "Internal Server Error";
        });


  }

      Cancel(){
        this.InitiateForm();
        this.submitted =false;
      }

      
  GetProductList(){
    this._transaction.GetProductQuantity()
    .subscribe(
        data => {
         debugger;
         this.products =data;
        },
        error => {
          debugger;
          
        });
    }

    GetShopList(){
      this._transaction.GetShopList()
      .subscribe(
          data => {
           debugger;
           this.shops =data;
          },
          error => {
            debugger;
          });
      }

}

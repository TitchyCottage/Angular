import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { productService } from '../../Service/product';
import { Product, ProductQuantity } from '../../models/Product';
import { first } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.css']
})
export class AddQuantityComponent implements OnInit {

  addProductQuantityForm: FormGroup;
  loading = false;
  hasError = false;
  hasSuccess = false;
  submitted = false;
  returnUrl: string;
  error = '';
  success ='';
  productList:any[];

  constructor( private _product: productService, 
    private formBuilder: FormBuilder,
    private datePipe:DatePipe,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.Initiateform();
    this.GetProduct();

    this.route.paramMap.subscribe(params => {
      debugger;
      if(params.get('id') && params.get('id') != '0'){
        this.GetProductQuantity(params.get('id'));
      }
    });

  }

  Initiateform(){
    debugger;
    this.addProductQuantityForm = this.formBuilder.group({
      id:[0],
      productName: ['', Validators.required],
      lot: ['', Validators.required],
      totalQuantity: ['', Validators.required],
      expiredDate: ['', Validators.required],
      manufacturerDate: [ this.currentDate(), Validators.required],
  });

  }

  currentDate(date="") {
    debugger;
    if(date){
      const currentDate = new Date(date);
      return    currentDate.getFullYear()+  "-"  + currentDate.getMonth().toString().padStart(2,"0") + "-" + currentDate.getDate().toString().padStart(2,"0") ;
    }else{
      const currentDate = new Date();
      return    currentDate.getFullYear() + "-" + currentDate.getMonth().toString().padStart(2,"0") + "-" + currentDate.getDate().toString().padStart(2,"0") ;
    }
  }

  GetProduct(){
    this._product.GetProducts()
    // .pipe(first())
    .subscribe(
        data => {
  
         debugger;
         this.productList =data;
        },
        error => {
          debugger;
          
        });
    }
  
    get data() { return this.addProductQuantityForm.controls; }

  onSubmit(){
    debugger;
    
    this.submitted =true;

    // stop here if form is invalid
    if (this.addProductQuantityForm.invalid) {
     return;
    }

    let data = this.productList.filter(
      f => f.productName === this.data.productName.value);

      let productID =0;
      
    if(data.length){
      productID = data[0].productID;
    }
   let requestData  = {} as ProductQuantity;
   requestData.id = this.data.id.value;
   requestData.productID = productID;
   requestData.productName = this.data.productName.value;
   requestData.lot = this.data.lot.value;
   requestData.totalQuantity = this.data.totalQuantity.value;
   requestData.manufacturerDate = this.data.manufacturerDate.value;
   requestData.expiredDate = this.data.expiredDate.value;

   this._product.SaveProductQuantity(requestData)
   .pipe(first())
   .subscribe(
       data => {
         debugger;
         if(data.success){
           this.hasSuccess = true;
           this.success = data.message;
           this.submitted =false;
           this.Initiateform();
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

  GetProductQuantity(id){
    this._product.GetProductQuantityById(id)
    // .pipe(first())
    .subscribe(
        data => {
          debugger;
        //  this.productList =data;
         this.addProductQuantityForm = this.formBuilder.group({
          id:[data.id],
          productName: [data.productName, Validators.required],
          lot: [data.lot, Validators.required],
          totalQuantity: [data.totalQuantity, Validators.required],
          expiredDate: [this.currentDate(data.expiredDate), Validators.required],
          manufacturerDate: [ this.currentDate(data.manufacturerDate), Validators.required],
      });
        },
        error => {
        });
  }
}

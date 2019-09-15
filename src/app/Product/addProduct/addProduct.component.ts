import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { productService } from '../../Service/product';
import { Product } from '../../models/Product';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  loading = false;
  hasError = false;
  hasSuccess = false;
  submitted = false;
  returnUrl: string;
  error = '';
  success ='';

  constructor(
    private _product: productService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  
  products: Product[];
  
  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      ID:[0],
      productName: ['', Validators.required],
      Description: ['', Validators.required],
      cost: ['', Validators.required]
  });

  this.GetProductList();
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


  EditProduct(data){
debugger;

this.addProductForm = this.formBuilder.group({
  ID:[data.productID],
  productName: [data.productName, Validators.required],
  Description: [data.productDescription, Validators.required],
  cost: [data.cost, Validators.required]

  })

}

CancelProduct(){
  this.addProductForm = this.formBuilder.group({
    ID:[0],
    productName: ['', Validators.required],
    Description: ['', Validators.required],
    cost: ['', Validators.required]
});
}
  get data() { return this.addProductForm.controls; }

  onSubmit(){
    debugger;
    
     // stop here if form is invalid
     if (this.addProductForm.invalid) {
      return;
  }

    let requestData  = {} as Product;
    requestData.productID = this.data.ID.value;
    requestData.productName = this.data.productName.value;
    requestData.productDescription = this.data.Description.value;
    requestData.cost = this.data.cost.value;
    this._product.SaveProduct(requestData)
    .pipe(first())
    .subscribe(
        data => {
          debugger;
          if(data.success){
            this.hasSuccess = true;
            this.success = data.message;
            this.CancelProduct();
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
}
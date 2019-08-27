import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { productService } from '../../Service/product';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm: FormGroup;
  loading = false;
  hasError = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private _product: productService, 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  
  products: Product[];
  
  ngOnInit() {
    this.addProductForm = this.formBuilder.group({
      productName: ['', Validators.required],
      Description: ['', Validators.required],
      cost: ['', Validators.required]
  });

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
  productName: [data.productName, Validators.required],
  Description: [data.productDescription, Validators.required],
  cost: [data.cost, Validators.required]

  })

}

CancelProduct(){
  this.addProductForm = this.formBuilder.group({
    productName: ['', Validators.required],
    Description: ['', Validators.required],
    cost: ['', Validators.required]
});
}
  get data() { return this.addProductForm.controls; }

  onSubmit(){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { productService } from '../../Service/product';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-viewProduct',
  templateUrl: './viewProduct.component.html',
  styleUrls: ['./viewProduct.component.css']
})


export class ViewProductComponent implements OnInit {

  constructor(private _product: productService) { }

  products: Product[];
  ngOnInit() {
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

}

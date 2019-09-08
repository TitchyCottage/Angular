import { Component, OnInit } from '@angular/core';
import { productService } from '../../Service/product';
import { Product, ProductQuantity } from '../../models/Product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewProduct',
  templateUrl: './viewProduct.component.html',
  styleUrls: ['./viewProduct.component.css']
})

export class ViewProductComponent implements OnInit {

  constructor(private _product: productService,
  private route: ActivatedRoute,
    private router: Router) { }

  productQuantity: ProductQuantity[];
  ngOnInit() {
    this._product.GetProductQuantity()
    // .pipe(first())
    .subscribe(
        data => {

         debugger;
         this.productQuantity =data;
        },
        error => {
          debugger;
          
        });
  }

  EditProduct(id){
    if(id){
      this.router.navigate(['/Admin/add-quantity',id]);
    }
  }
}

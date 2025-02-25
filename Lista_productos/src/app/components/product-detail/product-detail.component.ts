import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgClass],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
 @Input()
  product: Product ={
    id: 0,
    name: "",
    price: 0,
    inStock: false,
    onSale: false,
    img: ""
  };

  reload(Product : Product) : void{
    this.product = Product;
  }
}

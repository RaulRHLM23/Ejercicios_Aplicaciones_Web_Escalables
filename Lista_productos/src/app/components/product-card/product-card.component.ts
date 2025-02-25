import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from '../../interfaces/Product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [NgClass],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Output()
  productSelected: EventEmitter<Product> = new EventEmitter();
  @Input()
  product: Product ={
    id: 0,
    name: "",
    price: 0,
    inStock: false,
    onSale: false,
    img: ""
  };
  productDefault : Product ={
    id: 0,
    name: "",
    price: 0,
    inStock: false,
    onSale: false,
    img: ""
  }

  isSelected : boolean = false;

  //Funciones
  onSelected() : void {
    this.isSelected = !this.isSelected;
    if(this.isSelected){
      this.productSelected.emit(this.product);
    }else{
      
      this.productSelected.emit(this.productDefault);
    }
    
  

  }
}

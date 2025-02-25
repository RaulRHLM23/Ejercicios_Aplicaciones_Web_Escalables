import { Component } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor, NgIf } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, NgFor, ProductDetailComponent, NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    productToShow : Product ={
      id: 0,
      name: "",
      price: 0,
      inStock: false,
      onSale: false,
      img: ""
    };

    products : Product[] =[
      { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false , img:'https://i5.walmartimages.com/asr/eb431bf8-660d-4a23-9987-be9e3738e07f.dad1ead2e983b7dd1a7cc651a24ffe8a.jpeg'},
      { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, img:'https://i.ebayimg.com/images/g/-jAAAOSwnIlnQLIt/s-l1600.webp' },
      { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false , img:'https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00019425338745l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
      { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true , img:'https://www.officedepot.com.mx/medias/100138331.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDU5MTIxfGltYWdlL2pwZWd8YURsaEwyZ3hNUzh4TVRjMU9Ea3hOVGczT0RrME1pOHhNREF4TXpnek16RXVhbkJuWHpFeU1EQm1kSGN8ZjVlNTQzOTkyMjM5NTlmYjRjOGI3NjZiNDZmY2RmZGMzYjE0NzRhNzFhOWNiN2VhN2RiN2U3MTg5NGNjZDQ4OQ'},
      { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false , img:'https://media.mipc.com.mx/catalog/product/k/5/k586-pro_brahma_pngweb_1.png?width=480&height=480&store=default&image-type=image'},
      { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false , img:'https://www.officedepot.com.mx/medias/1200ftw-100238112.jpg?context=bWFzdGVyfHJvb3R8MzI0MTU4fGltYWdlL2pwZWd8YURRM0wyaGhNUzh4TWpVMk1UYzFOemd6TVRFNU9DOHhNakF3Wm5SM1h6RXdNREl6T0RFeE1pNXFjR2N8YTYwYzA4ZWYwODJlNmUwN2M1OTUyNWJkMjQyYWY5NjI4ZTJlZmE4N2JjNmUxYzQxMWE5MzZkMGU1ZjA0YjA3OA'},
      { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true , img:'https://i5.walmartimages.com/asr/865a3875-5dea-4c67-b1cb-fec806c3cb9e.b759ce575c320e383882db56feeab518.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'},
      { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false , img:'https://i5-mx.walmartimages.com/mg/gm/1p/images/product-images/img_large/00019425332403l.jpg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'},
      { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true , img:'https://m.media-amazon.com/images/I/71GvW1qrUYL.__AC_SX300_SY300_QL70_ML2_.jpg'},
      { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false , img:'https://m.media-amazon.com/images/I/61dQJkzRopL._AC_UL320_.jpg'},
      { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true , img:'https://m.media-amazon.com/images/I/71zZPfG0fnL._AC_UL320_.jpg'},
      { id: 12, name: 'Cámara web 1080p', price: 90, inStock: true, onSale: false , img:'https://m.media-amazon.com/images/I/61cd5Oeo9UL._AC_UL320_.jpg'},
      { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true , img:'https://m.media-amazon.com/images/I/51LPJou5ORL._AC_UL320_.jpg'},
      { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false , img:'https://m.media-amazon.com/images/I/81LUlHjB9YL._AC_UL320_.jpg'},
      { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true , img:'https://m.media-amazon.com/images/I/41OaOPzVEoL._AC_UL320_.jpg'},
    ];

    reload(Product : Product) : void{
      this.productToShow = Product;
    }
}

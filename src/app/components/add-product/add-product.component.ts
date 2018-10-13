import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  product: Product = {
    name: "",
    description: "",
    price: 0,
    quantity: 0
  }
  constructor() { }

  ngOnInit() {
  }

}

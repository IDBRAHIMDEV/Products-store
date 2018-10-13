import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit() {
    
  }

  createProduct(form) {
    
    if(form.valid) {
      this.productService.addProduct(this.product)
      .then((res => {
         this.route.navigate(['/']);
      }))
      .catch((error) => console.error(error.message))
    }else{
      alert(1)
    }

    
  }



}

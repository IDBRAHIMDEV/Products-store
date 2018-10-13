import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  product: Product = {
    name: "",
    description: "",
    price: 0,
    quantity: 0
  }

  constructor(
              private router: ActivatedRoute, 
              private productService: ProductService,
              private route: Router
             ) { }

  ngOnInit() {

    let productId = this.router.snapshot.params.id;
    
    this.productService.getProduct(productId).subscribe(product => {
        this.product = product;
        this.product.id = productId;
    })
  }


  changeProduct(form) {
     
    
    if(form.valid) {
      this.productService.updateProduct(this.product)
      .then(res => this.route.navigate(['/']))
      .catch(error => console.error(error.message));
    }
   
  }

}

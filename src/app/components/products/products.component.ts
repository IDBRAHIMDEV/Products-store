import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  
  products = [];



  ngOnInit() {
     this.listProduct();
  }

  listProduct() {

    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.products = products;
    });
  }

  suppProduct(id) {

    Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'success',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        
        this.productService.deleteProduct(id)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        
        
        Swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'success',
      timer: 5000
    })

      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } 
    })

  }

}

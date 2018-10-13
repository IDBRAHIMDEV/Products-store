import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fs: AngularFirestore) { }


  getProducts() {
    return this.fs.collection('products').valueChanges();
  }


  addProduct(product: Product) {
    return this.fs.collection('products').add(product);
  }
}

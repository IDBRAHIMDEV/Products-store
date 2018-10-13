import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fs: AngularFirestore) { }


  getProducts() {
    return this.fs.collection('products').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }


  addProduct(product: Product) {
    return this.fs.collection('products').add(product);
  }


  getProduct(id: string) {  
    return this.fs.doc(`products/${id}`).valueChanges();
  };


  updateProduct(product: Product) {
    return this.fs.doc(`products/${product.id}`).update(product);
  }


  deleteProduct(id: string) {
    return this.fs.doc(`products/${id}`).delete();
  }
}

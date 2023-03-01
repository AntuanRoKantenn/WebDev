import { Component } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = products

  like: number=0;

  likeIncr() {
    ++this.like;
  }

  show = true;

  showDet(){
    this.show = false;
  }

}

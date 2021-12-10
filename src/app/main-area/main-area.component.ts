import { Component, OnInit } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit {
  products: Product[] = [{
    title: "Молоко",
    description: "Молок Агромол 2,5%",
    price: 25.25,
    id: 1
  },
  {
    title: "Сметана",
    description: "Сметана Агромол 3,5%",
    price: 30.25,
    id: 2
  },
  {
    title: "Сметана",
    description: "Сметана Агромол 2,5%",
    price: 15.25,
    id: 3
  }]

  constructor() { }

  ngOnInit(): void {
  }


  addProduct(product: Product) {
    this.products.unshift(product)
  }

  delProduct(id: number | undefined) {
    this.products = this.products.filter(p => p.id !== id)
  }


}

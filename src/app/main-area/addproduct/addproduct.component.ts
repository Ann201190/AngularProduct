import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Output() onAdd: EventEmitter<Product> = new EventEmitter<Product>()

  title!: string
  description!: string
  price!: number

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {

    const product: Product = {
      title: this.title,
      description: this.description,
      price: this.price
    }

    this.onAdd.emit(product)

    this.title = ''
    this.description = ''
    this.price = 0.0
  }




}

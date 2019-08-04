import { Component, OnInit } from '@angular/core';
import { ProductService, ProductList } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  service: ProductService;
  pro: ProductList[]
  constructor(service: ProductService) { 
    this.service = service;
  }

  ngOnInit() {
    this.pro = this.service.getProducts();
  }

  add(data : any)
  {
    this.service.add(data);
  }
}

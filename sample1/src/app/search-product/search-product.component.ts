import { Component, OnInit } from '@angular/core';
import { ProductService, ProductList } from '../product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  service: ProductService
  detail: ProductList[];
  constructor(service: ProductService) { 
    this.service = service;
  }

  ngOnInit() {
    this.service.fetchProduct();
    this.detail = this.service.getProducts();
  }

  delete(e)
  {
    let index = this.detail.indexOf(e);
    this.detail.splice(index,1);
  }

  name; id; price; category;

  isUpdate: boolean = false;

  updateData(d:ProductList){
   
    this.isUpdate = !this.isUpdate;
    this.id = d.id;
    this.name = d.name;
    this.price = d.price;
    this.category = d.category;
  }

   update(data: any)
   {
     this.service.update(data);
     this.detail = this.service.getProducts();
   }

  

}

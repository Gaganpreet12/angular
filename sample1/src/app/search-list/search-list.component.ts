import { Component, OnInit } from '@angular/core';
import { ProductService, ProductList } from '../product.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  prod: ProductList[];
  service: ProductService;
  constructor(service: ProductService) {
    this.service = service;
   }

  ngOnInit() {
  }

  search(data) {
    this.prod=this.service.search(data);
    }

}

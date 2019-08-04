import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http : HttpClient;
  service : ProductService;
  
  prod: ProductList[] = [];

  constructor(http: HttpClient) { 
    this.http = http;
  }

  fetch: boolean=false;

  fetchProduct(){
    this.http.get('./assets/products.json').subscribe(
      data => {
        if(!this.fetch)
        {
          this.convert(data);
          this.fetch = true;
        }
      }
    )
  }
  convert(data: any)
  {
    for(let d of data["products"])
    {
      let e = new ProductList(d.id, d.name, d.price, d.category);
      this.prod.push(e);
    }
  }
  getProducts(): ProductList[]
  {
    return this.prod;
  }

  add(pr: ProductList)
  {
    let e = new ProductList(pr.id, pr.name, pr.price, pr.category);
    this.prod.push(pr);
  }

  update(data: ProductList){
    let pre = data.id;
    for(let i=0;i<this.prod.length; i++)
    {
      if(pre === this.prod[i].id)
      {
        this.prod[i].id = data.id;
        this.prod[i].name = data.name;
        this.prod[i].price = data.price;
        this.prod[i].category = data.category;
        break;
      }
    }
  }

 pro1: Array<ProductList>
 search(data):ProductList[] {
 this.pro1=[];
 for(let e of this.prod) {
 if(e.id===data.id) {
 this.pro1.push(e);
 }
 }
 return this.pro1;
 }
}

  





export class ProductList{
  id: number;
  name: string;
  price: number;
  category: string;
  constructor(id: number, name: string, price: number, category: string)
  {
    this.id=id;
    this.name=name;
    this.price=price;
    this.category=category;
  }
}
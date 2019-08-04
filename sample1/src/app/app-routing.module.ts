import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchListComponent } from './search-list/search-list.component';


const routes: Routes = [
{
  path: 'search-product',
  component: SearchProductComponent
},

{
  path : 'add-product',
  component : AddProductComponent
},
{
  path : 'app-search-list',
  component : SearchListComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

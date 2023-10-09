import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from "../app/auth.guard";
import { SellerAddProComponent } from './seller-add-pro/seller-add-pro.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
// import { Demo01Component } from './user-seller-auth/demo01/demo01.component';


const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'seller-auth', component: SellerAuthComponent },

  {
    component: SellerHomeComponent,
    path: 'seller-home',
    canActivate: [AuthGuard],
  },
  {
    component: SellerAddProComponent,
    path: 'seller-add-pro',
    canActivate: [AuthGuard],
  },
  {
    component: SellerUpdateProductComponent,
    path: 'seller-update-product/:id',
    canActivate: [AuthGuard],
  },
  {
    path: 'search/:query', component: SearchComponent
  },
  { path: 'details/:productId', component : ProductDetailsComponent},
  { path: 'user-auth', component: UserAuthComponent },
  
  // {path: 'demo', loadChildren: () => import("./demo/demo.component").then(m => m.DemoComponent)},
  // {path: 'demo01', component: Demo01Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

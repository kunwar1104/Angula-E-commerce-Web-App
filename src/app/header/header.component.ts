import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from './../../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuType: string = 'default' // this function is not werkoing maybe b'coz of bootstrap nevbar 
  sellerName: string = '';
  userName: string = "";
  searchResult: undefined | product[]

  constructor(private route: Router, private product: ProductService) { }

  ngOnInit() {
    this.route.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellerName = sellerData.name
          this.menuType = 'seller'  
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user')
          let userData = userStore && JSON.parse(userStore)[0]
          this.userName = userData.name      // here name property is given because it will use for html which shows name at screen like this name user is signin
          this.menuType = 'user'  
        }
         else {
          this.menuType = 'default'  // this function is not werkoing maybe b'coz of bootstrap nevbar
        }
      }
    })
  }

  logout() {
    localStorage.removeItem('seller')
    this.route.navigate(['/'])
  }

  serchProduct(query: KeyboardEvent): void {
    if (query) {
      const element = query.target as HTMLInputElement
      console.log(element.value)
      this.product.serchProduct(element.value).subscribe((result) => {
        console.warn(result);
        if(result.length > 5) {
          result.length=length
        }
        this.searchResult= result;
      }) }
  }

  hideSearch() {
     this.searchResult=undefined
  }

  submitSerch(value: string) {
    console.log(value)
    this.route.navigate([`search/${value}`]);
  }
  redirectToDetails(id:number) {
    this.route.navigate(['/details/'+id])  // this werk for serchbar sugestion
  }
  
  userLogOut() {
    localStorage.removeItem('user')
    this.route.navigate(['/'])
  }
}

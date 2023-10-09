import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';
// import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn:'root'
})

export class AuthGuard implements CanActivate {
  constructor(private sellerService: SellerService) {}
  permissions: any;
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
   
      if(localStorage.getItem('seller'))
       return true

      return this.sellerService.isSellerLoggedIn;
 
}
 
}

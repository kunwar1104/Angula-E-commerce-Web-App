import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { login, signUp } from 'src/data-type';   // Interface

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})

export class SellerAuthComponent implements OnInit {

  constructor(  private seller: SellerService ) { }

  showLogin = false;      // here with this we can toggle login and signup page
  authError: string = "";
  
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: signUp): void {
    // console.log(data)
    this.seller.userSignUp(data);
  }

  login(data: login): void {
    //  console.log(data)
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or Password is not correct"
      }
    })
  }
  
  openSignUp(): void {
    this.showLogin = true
  }
  openLogin(): void {
    this.showLogin = false
  }
}

// 


import { Component } from '@angular/core';
import { login, signUp } from 'src/data-type';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent {
  showLogin: boolean= true
  constructor(private user: UserService , private route:Router) { }

  ngOnInit(): void {
    this.user.userAuthRelod()
  }

  signUp(data: signUp) {
    this.user.userSignup(data)
    this.route.navigate(["/user-auth",this.openLogin])
  }
  login(data: login){
    this.user.userLogin(data)
  }

  openSignup(){
   this.showLogin= false
  //  this.route.navigate([this.showLogin])
  }
  openLogin(){
    this.showLogin= true
    // this.route.navigate([this.showLogin])

  }
}

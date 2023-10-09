import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http: HttpClient, private router: Router) { }

  userSignup(user: signUp) {
    this.http.post("http://localhost:3000/users", user, { observe: 'response' })
      .subscribe(result => {
        if (result) {
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['/'])
        }
      });
  }
  userLogin(data: login) {
    this.http.get<signUp[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).subscribe((result) => {
        console.log(result)
        if(result.body) {
          localStorage.setItem('user', JSON.stringify(result.body[0]));
          this.router.navigate(['/'])
        }
      })
  }

  userAuthRelod() {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/'])

  }
}

}


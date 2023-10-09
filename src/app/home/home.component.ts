import { Component, OnInit } from '@angular/core';
import { product } from './../../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  // providers: [
  //   { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  // ]
})
export class HomeComponent implements OnInit {

     popularProducts: undefined | product[];  
     trendyProducts: undefined | product[];
     
     constructor (private product:ProductService) { }
  
    ngOnInit(): void {
      this.product.popularProducts().subscribe((data:any) => {
      this.popularProducts= data
      })
     this.product.trendyProducts().subscribe((data) => {
        this.trendyProducts= data
     })
    }

}

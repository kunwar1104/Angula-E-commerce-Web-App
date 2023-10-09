import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-seller-add-pro',
  templateUrl: './seller-add-pro.component.html',
  styleUrls: ['./seller-add-pro.component.scss']
})
export class SellerAddProComponent implements OnInit {

addProductMessage: string | undefined

constructor( private product:ProductService ){}
   
  ngOnInit(): void {
  }

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
         console.log(result)
         if(result){
         this.addProductMessage="Product Added Sucessful"
         }
         else{
          this.addProductMessage="Somthing is wrwong Bro"
         }
    });

    setTimeout(() => {
      this.addProductMessage=undefined
    }, 1500);
  }
}

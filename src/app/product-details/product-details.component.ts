import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from './../../data-type';
import { ProductService } from '../services/product.service';
import { combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  productData: undefined | product
  productQuantity: number= 1

  constructor(private avtivateRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.avtivateRoute.snapshot.paramMap.get('productId'); //serch this for what this is use
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((result) => {
      console.log(result)
      this.productData=result
    })
  }
  handleQuanty(val:string){
    if(this.productQuantity < 20 && val === 'plus'){
      this.productQuantity+=1;
      
    }else if (this.productQuantity > 1 && val === 'min'){
      this.productQuantity-=1;
      
    }
  }

}

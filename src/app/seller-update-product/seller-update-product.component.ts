import { Component } from '@angular/core';
import { product } from './../../data-type';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.scss']
})
export class SellerUpdateProductComponent {
  updatedMessage: string | undefined
  productData: undefined | product;

  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id')
    console.log("productId =", productId);
    productId && this.product.getProduct(productId).subscribe((data) => {
      console.log(data)
      this.productData = data
    })
  }

  submit(data: any) {
    // console.log('submit =',data);
    if (this.productData) {
      data.id = this.productData.id;
    }

    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.updatedMessage = "Updated successful"
      }
      console.log(data)
    })
    setTimeout(() => {
      this.updatedMessage = undefined
    }, 3000)
  }
}

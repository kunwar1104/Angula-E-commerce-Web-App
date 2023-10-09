import { Component } from '@angular/core';
import { product } from 'src/data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent {

  productlist: undefined | product[];
  productMessage: undefined | string;
  icon = faTrash;
  iconEdit = faEdit

  constructor(private product: ProductService) {}

  ngOnInit(): void { 
    this.list()      
  };

  deleteProduct(id: number){
    console.log("ID for delete =",id)
    this.product.deleteProduct(id).subscribe((result) => {
      console.log(result)
      if(result) {
       this.productMessage= "Product is deleted";
       
       this.list()  
      }
    })
    setTimeout(() => {
      this.productMessage= undefined
    },1500)
   }

   list() {                                             // here we make this function for refrash the page after 
    this.product.productList().subscribe((result) =>{   // the delete some product than updated page may show 
      console.log(result)
      if(result){
        this.productlist = result 
      }
    })           
   }

}


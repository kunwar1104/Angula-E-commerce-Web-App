import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from './../../data-type';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  serchResult: undefined | product[]  // maybe product type
  constructor(private activeRoute: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.log(query)
    query && this.product.serchProduct(query).subscribe((result) => {
      this.serchResult = result
    })
  }
}

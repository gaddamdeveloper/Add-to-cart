import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public productList: any;
  constructor(private ap: ApiService,private cs:CartService) { }

  ngOnInit(): void {
    this.ap.getAllProducts().subscribe(
      (response)=>{
        // console.log(response);
        this.productList=response;
        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});
          
        });
      },(error)=>{
        console.log(error)
      }
    )
}

addToCart(item:any){
this.cs.addToCart(item);  


}
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
public product:any=[];
public grandTotal !:number;
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getProduct().subscribe(res=>{
      this.product=res;
      this.grandTotal =this.cs.getTotalPrice();

    })
  }
  removeItem(item:any){
    this.cs.removeCartItem(item);

  }
  emptyCart(){
this.cs.removeAllCart();
  }

}

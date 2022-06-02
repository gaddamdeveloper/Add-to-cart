import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public totalItem:number=0;
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.cs.getProduct().subscribe(res=>{
      this.totalItem=res.length;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css'],
})
export class CartitemsComponent implements OnInit {
  cartitems: any = [];
  constructor(private commonservie: CommonService) {}

  ngOnInit(): void {
    this.cartitems = this.commonservie.selectproductdata;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  filteredbrandphones: any = [];
  selectedproducts: any = [];
  specificproduct: any = [];
  toggleAddedButton: any = false;
  getSpecificProductDetails(product) {
    this.specificproduct = [];
    this.specificproduct.push(product);
  }

  constructor(
    private route: ActivatedRoute,
    private commonservice: CommonService,
    private router: Router
  ) {}
  products: any = this.commonservice.products;
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      let filterbrand = param.brand;
      this.filteredbrandphones = this.products.filter((product) => {
        if (product.Brand == filterbrand) {
          return product;
        }
      });
    });
  }
  specifications(product) {
    debugger;

    this.commonservice.getspecOfselectedProduct(product);
    this.commonservice.getjsonData().subscribe((response: any) => {
      console.log(response);
    });
    this.router.navigate(['specifications'], { relativeTo: this.route });
  }
  getSelectedProduct(product) {
    this.selectedproducts.push(product);
    this.commonservice.setdatials(this.selectedproducts);
    product.toggleAddedButton = true;
  }
}

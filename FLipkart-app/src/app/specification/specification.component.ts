import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css'],
})
export class SpecificationComponent implements OnInit {
  constructor(
    private commonservices: CommonService,
    private route: ActivatedRoute
  ) {}
  specifications: any = [];
  ngOnInit(): void {
    debugger;
    this.route.params.subscribe();

    this.specifications = this.commonservices.SingleselectedProduct;
    console.log(this.specifications);
  }
}

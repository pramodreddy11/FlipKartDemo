import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  brands: any = ['iphone', 'Mi', 'oppo', 'Oneplus', 'RealMe'];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  getSelectedItem(brand) {
    console.log(brand);
    this.router.navigate(['/products', brand]);
  }
}

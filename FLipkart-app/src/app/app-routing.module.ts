import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SpecificationComponent } from './specification/specification.component';
import { BranddetailsComponent } from './branddetails/branddetails.component';
import { RatingAndReviewsComponent } from './rating-and-reviews/rating-and-reviews.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductdetailsComponent,
    children: [
      {
        path: 'specifications',
        component: SpecificationComponent,
      },
      {
        path: 'BrandDetails',
        component: BranddetailsComponent,
      },
      {
        path: 'Reviews&Rating',
        component: RatingAndReviewsComponent,
      },
    ],
  },
  {
    path: 'products/:brand',
    component: ProductdetailsComponent,
  },
  {
    path: 'cart',
    component: CartitemsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

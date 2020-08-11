import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SpecificationComponent } from './specification/specification.component';
import { BranddetailsComponent } from './branddetails/branddetails.component';
import { RatingAndReviewsComponent } from './rating-and-reviews/rating-and-reviews.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductdetailsComponent,
    CartitemsComponent,
    LoginComponent,
    SignupComponent,
    SpecificationComponent,
    BranddetailsComponent,
    RatingAndReviewsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { ApartmentsComponent } from './views/apartments/apartments.component';
import { ApartmentCardComponent } from './components/apartment-card/apartment-card.component';
import { ApartmentComponent } from './views/apartments/apartment/apartment.component';
import { AddApartmentComponent } from './views/apartments/add-apartment/add-apartment.component';
import { ErrorComponent } from './views/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentListSkeletonComponent } from './components/apartment-list-skeleton/apartment-list-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent,
    ApartmentsComponent,
    ApartmentCardComponent,
    ApartmentComponent,
    AddApartmentComponent,
    ErrorComponent,
    ApartmentListSkeletonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

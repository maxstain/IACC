import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { ApartmentsComponent } from './views/apartments/apartments.component';
import { ApartmentComponent } from './views/apartments/apartment/apartment.component';
import { AddApartmentComponent } from './views/apartments/add-apartment/add-apartment.component';
import { ErrorComponent } from './views/error/error.component';
import { LoginComponent } from './views/auth/login/login.component';
import { SigninComponent } from './views/auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'apartment/add', component: AddApartmentComponent },
  { path: 'apartment/:id', component: ApartmentComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

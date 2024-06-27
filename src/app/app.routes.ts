import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationComponent } from './destination/destination.component';
import { DestinationDetailComponent } from './destination-detail/destination-detail.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

export const routes: Routes = [
    {path: '', title:'Home' , component:HomeComponent},
    {path: 'about', title:'About' , component:AboutComponent},
    {path: 'contact', title:'Contact' , component:ContactComponent},
    {path: 'destination', title:'Destination' , component:DestinationComponent},
    {path: 'destinationDetail', title:'DestinationDetail' , component:DestinationDetailComponent},
    {path: 'login', title:'Account' , component:LoginSignupComponent},
];

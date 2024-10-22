import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { TaxCalculatorComponent } from '../components/tax-calculator/tax-calculator.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"aboutUs", component:AboutUsComponent},
    { path: 'taxcalculator', component: TaxCalculatorComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcontactComponent } from './formcontact/formcontact.component';
import { AccComponent } from './acc/acc.component';
import { DeltafacadesComponent } from './deltafacades/deltafacades.component';
import {RealiserComponent} from './realiser/realiser.component';
import { BodyComponent } from './deltafacades/body/body.component';
import { M1Component } from './met/m1/m1.component';
import { M2Component } from './met/m2/m2.component';
import { M3Component } from './met/m3/m3.component';
import { M4Component } from './met/m4/m4.component';
import { M5Component } from './met/m5/m5.component';
import { M6Component } from './met/m6/m6.component';
import { M7Component } from './met/m7/m7.component';
import { M8Component } from './met/m8/m8.component';
import { M9Component } from './met/m9/m9.component';
import { MetierComponent } from './metier/metier.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'acc', component: AccComponent },
  { path: '', redirectTo: '/acc', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'formcontact', component: FormcontactComponent },
  { path: 'deltafacades', component: DeltafacadesComponent },
  { path: 'realiser', component: RealiserComponent },
  { path: 'body', component: BodyComponent },
  {path : 'm1', component : M1Component },
  {path : 'm2', component : M2Component },
  {path : 'm3', component : M3Component },
  {path : 'm4', component : M4Component },
  {path : 'm5', component : M5Component },
  {path : 'm6', component : M6Component },
  {path : 'm7', component : M7Component },
  {path : 'm8', component : M8Component },
  {path : 'm9', component : M9Component },
  {path : 'metier', component : MetierComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],

exports: [RouterModule]
})
export class AppRoutingModule { }

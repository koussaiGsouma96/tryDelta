import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeltaComponent } from './delta/delta.component';
import { MetiersComponent } from './metiers/metiers.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';
import { FormcontactComponent } from './formcontact/formcontact.component';
import { AccComponent } from './acc/acc.component';
import { FormulaireComponent } from './formcontact/formulaire/formulaire.component';
import { FooterComponent } from './formcontact/footer/footer.component';
import { DeltafacadesComponent } from './deltafacades/deltafacades.component';
import { BodyComponent } from './deltafacades/body/body.component';
import { HeaderComponent } from './deltafacades/header/header.component';
import { RealiserComponent } from './realiser/realiser.component';
import { HeadComponent } from './realiser/head/head.component';
import { MilieuComponent } from './realiser/milieu/milieu.component';
import { FootComponent } from './realiser/foot/foot.component';
import { MetComponent } from './met/met.component';
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
import { NavComponent } from './met/nav/nav.component';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './formcontact/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeltaComponent,
    MetiersComponent,
    RealisationsComponent,
    ContactComponent,
    FormcontactComponent,
    AccComponent,
    FormulaireComponent,
    FooterComponent,
    DeltafacadesComponent,
    BodyComponent,
    HeaderComponent,
    RealiserComponent,
    HeadComponent,
    MilieuComponent,
    FootComponent,
    MetComponent,
    M1Component,
    M2Component,
    M3Component,
    M4Component,
    M5Component,
    M6Component,
    M7Component,
    M8Component,
    M9Component,
    MetierComponent,
    NavComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

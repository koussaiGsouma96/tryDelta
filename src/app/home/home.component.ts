import { Component, OnInit,  HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
}
nav_variable=false;
@HostListener("document:scroll")
scrollfunction() {
  if(document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
    this.nav_variable=true;
  }
  else{
    this.nav_variable=false;
  }
}

}
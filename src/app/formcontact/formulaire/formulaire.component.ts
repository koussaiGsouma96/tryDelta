import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from './../../connection.service';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
   form = document.getElementById("my-form");
   
  contactForm : any ;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.form)
      this.contactForm = this.formBuilder.group({
          nom: ['', Validators.required],
          sujet: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          message: ['', Validators.required],
          
      },
      )}
  
  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  onSubmit() {
      this.submitted = true;
     console.log(this.contactForm.value)

      fetch("https://formspree.io/f/mpzkylea", {
        method: "POST",
        body: JSON.stringify(this.contactForm.value),
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
       console.log(response)
      }).catch(error => {
        console.log(error)
      });
    
      // stop here if form is invalid
      if (this.contactForm.invalid) {
          return;
      }

      // display form values on success
      alert('Message envoyé!! :) \n\n' );
  }


}

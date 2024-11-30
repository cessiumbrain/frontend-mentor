import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'contact-form';
  form= new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    queryType: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })
  toastMessage = ''
  submitClicked=false


  onSubmit(){
    this.submitClicked = true
    if(this.form.invalid){
      this.toastMessage='please correct invalid fields'
    } else {
      this.form.reset()
      this.submitClicked = false
      this.toastMessage = 'Success!'
    }
    
  }
}

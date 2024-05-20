import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxPhoneNumberInputModule } from "ngx-lib-phone-input";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxPhoneNumberInputModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'form';

  constructor(){ }
number:any
  MyForm = new FormGroup({
    phoneNumber : new FormControl('')
  })

  submit(){
    this.number =this.MyForm.value.phoneNumber || "";
  }
}

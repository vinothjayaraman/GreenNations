import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formError: string;
  submitting: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}

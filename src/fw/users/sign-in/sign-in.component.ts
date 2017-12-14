import { Component, OnInit } from '@angular/core';
import { signInViewModel } from '../../viewModel/signInViewModel';
import { UserApi } from '../user-api';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formError: string;
  submitting: boolean = false;
  
  public model : signInViewModel;

  constructor(private userApi : UserApi, 
              private router : Router ) { 
    this.model = new signInViewModel();

  }

  onSubmit(signInForm: NgForm){
    if (signInForm.valid) {
      console.log('submitting...', signInForm);
      this.submitting = true;
      this.formError= null;

      this.userApi.signIn(signInForm.value.username, signInForm.value.password, signInForm.value.rememberMe)
        .subscribe((data)=>{
          console.log('got valid: ', data);
          this.router.navigate(['/authenticated']);
        },
        (err) => {
          this.submitting = false;
          console.log('got error: ', err);
          this.formError = err;
        }
      );
    }
  }

  ngOnInit() {
  }

}

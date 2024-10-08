import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../service/auth/auth.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;
  hidePassword= true;

  constructor(private formBulider:FormBuilder,
    private snackBar: MatSnackBar,
    private authService : AuthService,
    private router : Router){
  }

  ngOnInit():void{
    this.signupForm = this.formBulider.group({
      name: [null,[Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      street: [null,[Validators.required]],
      city: [null, [Validators.required]],
      state: [null,[Validators.required]],
      postalcode: [null,[Validators.required]],
      country: [null,[Validators.required]]
    })
  }


  onSubmit() : void {
    const password = this.signupForm.get('password')?.value;

    this.authService.register(this.signupForm.value).subscribe(
      (res) =>  {
        this.snackBar.open('Sign Up succesful!', 'close', {duration:5000});
        this.router.navigateByUrl("/login")
      },
      (error) => {
        this.snackBar.open('Sign Up faild. Please try again', 'close', {duration:5000});
      }
    )
  }
}

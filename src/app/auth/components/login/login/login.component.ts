import { AuthService } from './../../../service/auth/auth.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { UserStorageService } from '../../../service/storage/user-storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,NgIf,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm! : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private snackBar : MatSnackBar,
    private router : Router) {}

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]]
      });
    }

    onSubmit(): void {
      const username = this.loginForm.get('username')!.value;
      const password = this.loginForm.get('password')!.value;

      this.authService.login(username, password).subscribe(
        (res) => {
          if(UserStorageService.isAdminLoggedIn()){
          this.snackBar.open('Login Success', 'OK', { duration: 5000 });
          this.router.navigateByUrl('admin/dashboard');
          }
          else if(UserStorageService.isCustomerLoggedIn()){
            this.router.navigateByUrl('')
          }
          else{
            this.router.navigateByUrl('')
          }
        },
        (error) => {
          this.snackBar.open('Login Failed', 'ERROR', { duration: 5000 });
        }
      );
    }

}

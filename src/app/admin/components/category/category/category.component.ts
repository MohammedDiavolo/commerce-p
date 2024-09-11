import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../service/admin.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryForm!: FormGroup;

  constructor(
    private  formBuilder: FormBuilder,
    private   router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ){}
  ngOnInit(): void {
  this.categoryForm = this.formBuilder.group({
    name:[null,[Validators.required]],
  })
  }

  addCategory():void {
    if(this.categoryForm.valid){
      this.adminService.addCategory(this.categoryForm.value).subscribe((res)=>{
        if(res.id != null){
          this.snackBar.open('Category Added Successfully', 'Close', {
            duration:5000
          });
          this.router.navigateByUrl('/dashboard');
        }else{
          this.snackBar.open('Failed to Add Category', 'Close', {
            duration:5000,
            panelClass:'error-snackbar'
          });

        }
      })
    }else{
      this.categoryForm.markAllAsTouched();
    }
  }
}

import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  @Input() data:any = {}
  @Output() itemProduct = new EventEmitter()
  constructor(private router: Router){
  }
  ngOnInit(): void {

  }
  add(item: any) {
    this.itemProduct.emit(item);
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}

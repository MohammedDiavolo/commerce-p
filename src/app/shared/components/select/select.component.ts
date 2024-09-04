import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AllProductsComponent } from '../../../products/components/all-products/all-products.component';
@Component({
  selector: 'app-select',
  standalone: true,
  imports: [AllProductsComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit{


@Input() title:string = ""
@Input() data: any[] = [];
@Output() selection = new EventEmitter()
constructor(){}

ngOnInit(): void {

}

detectedChanges(event: any) {
  this.selection.emit(event)
}

}

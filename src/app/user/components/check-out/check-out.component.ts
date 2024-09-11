import { NgFor } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [NgFor],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: number[] = [];

  constructor(private renderer: Renderer2) {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i <= 10; i++) {
      this.years.push(currentYear + i);
    }
  }

  toggleCart(): void {
    const body = document.querySelector('body');
    if (body?.classList.contains('active')) {
      this.renderer.removeClass(body, 'active');
    } else {
      this.renderer.addClass(body, 'active');
    }
  }
}

import { Component, Input } from '@angular/core';
import { AppComponent } from '../app/app.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() title: string = '';
}

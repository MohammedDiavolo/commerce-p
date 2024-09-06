import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent,HttpClientModule,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'FutureTech';
  showHeaderFooter: boolean = true;
  showLayout: boolean = true;

    constructor(private router: Router) {
      this.router.events.subscribe((event: any) => {
        if (event.url === '/login' || event.url ==='/signup') {
          this.showHeaderFooter = false;
        } else {
          this.showHeaderFooter = true;
        }
      });
      this.router.events.subscribe((event: any) => {
        if (event.url === '/login'|| event.url === '/cart'|| event.url ==='/signup') {
          this.showLayout = false;
        } else {
          this.showLayout = true;
        }
      });
    }
}


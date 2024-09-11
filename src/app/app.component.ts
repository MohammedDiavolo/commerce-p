
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,HttpClientModule,FormsModule,NgIf,FooterComponent],
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
        if (event.url === '/login'||
            event.url === '/cart'||
            event.url ==='/signup'||
            event.url ==='/category'||
            event.url ==='/product'||
            event.url === '/checkout') {
          this.showLayout = false;
        } else {
          this.showLayout = true;
        }
      });
    }
}


import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainlayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

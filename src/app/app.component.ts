import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  nombre = 'Paz Jiménez Martín';
  fecha = new Date();
  ciudad = 'Málaga';
  telefono = '630 61 70 32';
  mail = 'mpazjimenezmartin@gmail.com';
  github = 'https://github.com/mpjmar';
  idiomas = 'Español / English';
}

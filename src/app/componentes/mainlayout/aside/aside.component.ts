import { Component } from '@angular/core';

@Component({
  selector: 'aside',
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  ciudad = 'Málaga';
  telefono = '630 61 70 32';
  mail = 'mpazjimenezmartin@gmail.com';
  idiomas = ['Español', 'Inglés'];
}

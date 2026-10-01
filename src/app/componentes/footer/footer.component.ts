import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'footer',
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  fecha = new Date();
}

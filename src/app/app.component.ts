import { DatePipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/mainlayout/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatePipe,
    NgOptimizedImage,
    HeaderComponent,
    MainComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nombre = 'Paz Jiménez Martín';
  fecha = new Date();
  ciudad = 'Málaga';
  telefono = '630 61 70 32';
  mail = 'mpazjimenezmartin@gmail.com';
  github = 'https://github.com/mpjmar';
  idiomas = ['Español', 'Inglés'];
  sobremi =
    'Estudiante de 2º curso del CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM), en transición hacia el sector tecnológico. Tras más de 20 años de experiencia profesional en los ámbitos administrativo y de atención al cliente, decidí reorientar mi carrera profesional hacia el desarrollo de software. Me motivan especialmente el aprendizaje continuo, la resolución de problemas y la aplicación de mis conocimientos en proyectos reales, aportando capacidades como organización, cooperación y compromiso adquiridos a lo largo de mi trayectoria profesional.';
  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];
}

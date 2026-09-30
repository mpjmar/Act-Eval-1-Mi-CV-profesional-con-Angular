import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  sobremi =
    'Estudiante de 2º curso del CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM), en transición hacia el sector tecnológico. Tras más de 20 años de experiencia profesional en los ámbitos administrativo y de atención al cliente, decidí reorientar mi carrera profesional hacia el desarrollo de software. Me motivan especialmente el aprendizaje continuo, la resolución de problemas y la aplicación de mis conocimientos en proyectos reales, aportando capacidades como organización, cooperación y compromiso adquiridos a lo largo de mi trayectoria profesional.';
  tecnologias = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'Java'];
}

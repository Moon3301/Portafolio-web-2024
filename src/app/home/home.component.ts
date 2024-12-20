import { Component, HostListener  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

type Experience = {

  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  company: string;
  technologies: string[];

}

type Project = {

  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  technologies: string[];

}

type Skill = {

  name: string;
  description: string;

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  experiences: Experience[] = [
    {
      title: 'Software Developer',
      description: 'Developing software for a company',
      startDate: new Date('2020-01-01'),
      endDate: new Date('2020-12-31'),
      company: 'Company A',
      technologies: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Software Developer',
      description: 'Developing software for a company',
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-12-31'),
      company: 'Company B',
      technologies: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Software Developer',
      description: 'Developing software for a company',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-12-31'),
      company: 'Company C',
      technologies: ['Java', 'Python', 'JavaScript']
    }
  ];

  projects: Project[] = [
    {
      title: 'Project A',
      description: 'Developing a project',
      startDate: new Date('2020-01-01'),
      endDate: new Date('2020-12-31'),
      technologies: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Project B',
      description: 'Developing a project',
      startDate: new Date('2021-01-01'),
      endDate: new Date('2021-12-31'),
      technologies: ['Java', 'Python', 'JavaScript']
    },
    {
      title: 'Project C',
      description: 'Developing a project',
      startDate: new Date('2022-01-01'),
      endDate: new Date('2022-12-31'),
      technologies: ['Java', 'Python', 'JavaScript']
    }
  ];

  

  constructor() { }

  @HostListener('window:scroll', [])
  onScroll(): void {

    const sections = document.querySelectorAll('.section');
    const lines = document.querySelectorAll('.line');

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const line = lines[index] as HTMLElement;

      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        line.style.width = '50px'; // Anima la línea
      } else {
        line.style.width = '0'; // Resetea la animación
      }
    });


  }



}

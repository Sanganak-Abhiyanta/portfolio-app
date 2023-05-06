import { Component } from '@angular/core';
import { WorkExp } from '../modal/modal';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  workExpList: WorkExp[] = [
    {
      role: 'Project Engineer',
      company: 'Wipro',
      duration: 'May 2022 - present',
      desc: [
        'Angular Developer',
        'Java J2EE',
        'SpringBoot',
        'Hibernate',
        'JSP',
      ],
    },
    {
      role: 'Project Engineer',
      company: 'Wipro',
      duration: 'May 2022 - present',
      desc: [
        'Angular Developer',
        'Java J2EE',
        'SpringBoot',
        'Hibernate',
        'JSP',
      ],
    },
  ];
}

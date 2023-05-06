import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Nitish Kumar'],
    ['DOB', '15/12/1009'],
    ['Work Exp.', '1 Year'],
    ['Education', 'B.Tech(CSE)'],
    ['Interest', 'Badminton'],
  ];

  aboutMe: string[] = [
    'Namaste, I am a Software engineer with 1 year of experience in software industry. ',
    'worked as a Project Engineer as an Angular Developer.',
    'Delivered all the assigned task within the dedline and always eager to learn new technologies.',
    'Currently working as Project Engineer in @wipro.',
  ];
}

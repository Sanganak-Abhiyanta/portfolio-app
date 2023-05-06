import { Component } from '@angular/core';
import { Education } from '../modal/modal';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'Nalanda College of Engineering,Chandi',
      course: 'B.tech(CSE)',
      duration: '2018-2022',
      score: '7.79 CGPA',
    },
    {
      institute: 'M.L.T. College, Saharsa',
      course: 'HSC',
      duration: '2017-2018',
      score: '63.20%',
    },
    {
      institute: 'M.M.D. High School, Salkhua',
      course: 'SSC',
      duration: '2015-2016',
      score: '75.20%',
    },
  ];
}

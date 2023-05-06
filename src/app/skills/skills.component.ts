import { Component } from '@angular/core';
import { Skills } from '../modal/modal';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillList:Skills[]=[
    {
      name:"Angular, Angular Material",
      level:"Expert",
      rating:70
    },
    {
      name:"React, Redux",
      level:"Expert",
      rating:90
    },
    {
      name:"HTML5",
      level:"Expert",
      rating:70
    },
    {
      name:"CSS",
      level:"Expert",
      rating:80
    }
  ]
  }
  
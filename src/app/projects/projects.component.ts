import { Component } from '@angular/core';
import { Project } from '../modal/modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectList:Project[]=[
    {
      title:"College Website",
      technologies:"Html5, CSS3, ES6, React",
      desc:["This is a clone of my college website.",
    "It is better than my college website."]
    },
    {
      title:"string",
      technologies:"string",
      desc:["abc","bcd","alkdf"]
    },
    {
      title:"string",
      technologies:"string",
      desc:["abc","bcd","alkdf"]
    }
  ]
  }
  
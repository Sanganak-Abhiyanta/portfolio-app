import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ResponsiveDirective } from './diretive/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    EducationComponent,
    SkillsComponent,
    PersonalInformationComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    ContactsComponent,
    ResponsiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

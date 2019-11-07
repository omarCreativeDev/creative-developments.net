import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YearsOfExperienceComponent } from './components/years-of-experience/years-of-experience.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, YearsOfExperienceComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, FontAwesomeModule, YearsOfExperienceComponent],
})
export class SharedModule {}

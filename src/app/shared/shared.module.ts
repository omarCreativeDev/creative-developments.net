import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YearsOfExperienceComponent } from './components/years-of-experience/years-of-experience.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, YearsOfExperienceComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent, FontAwesomeModule, YearsOfExperienceComponent],
})
export class SharedModule {}

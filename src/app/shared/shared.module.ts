import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YearsOfExperienceComponent } from './components/years-of-experience/years-of-experience.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, YearsOfExperienceComponent, PageNotFoundComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent, FontAwesomeModule, YearsOfExperienceComponent, PageNotFoundComponent],
})
export class SharedModule {}

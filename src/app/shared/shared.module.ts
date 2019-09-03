import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}

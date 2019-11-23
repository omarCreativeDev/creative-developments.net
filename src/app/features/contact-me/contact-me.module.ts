import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';
import { SharedModule } from '@shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactMePageComponent, ContactFormComponent, ContactDetailsComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, ContactMeRoutingModule],
})
export class ContactMeModule {}

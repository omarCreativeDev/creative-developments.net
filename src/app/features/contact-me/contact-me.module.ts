import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeRoutingModule } from './contact-me-routing.module';
import { ContactMePageComponent } from './contact-me-page/contact-me-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ContactMePageComponent],
  imports: [CommonModule, SharedModule, ContactMeRoutingModule],
})
export class ContactMeModule {}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactMePageComponent } from './pages/contact-me-page/contact-me-page.component';

const routes: Routes = [{ path: '', component: ContactMePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactMeRoutingModule {}

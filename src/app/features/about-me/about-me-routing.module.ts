import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';

const routes: Routes = [{ path: '', component: AboutMePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutMeRoutingModule {}

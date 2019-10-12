import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AboutMePageComponent],
  imports: [CommonModule, SharedModule, AboutMeRoutingModule],
})
export class AboutMeModule {}

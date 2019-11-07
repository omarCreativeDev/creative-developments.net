import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { SharedModule } from '@shared/shared.module';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { AvatarAndHobbiesComponent } from './components/avatar-and-hobbies/avatar-and-hobbies.component';

@NgModule({
  declarations: [AboutMePageComponent, MoreInfoComponent, AvatarAndHobbiesComponent],
  imports: [CommonModule, SharedModule, AboutMeRoutingModule],
})
export class AboutMeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySkillsRoutingModule } from './my-skills-routing.module';
import { MySkillsPageComponent } from './pages/my-skills-page/my-skills-page.component';
import { SharedModule } from '@shared/shared.module';
import { MySkillsSummaryComponent } from './components/my-skills-summary/my-skills-summary.component';
import { MySkillsDetailsComponent } from './components/my-skills-details/my-skills-details.component';

@NgModule({
  declarations: [MySkillsPageComponent, MySkillsSummaryComponent, MySkillsDetailsComponent],
  imports: [CommonModule, SharedModule, MySkillsRoutingModule],
})
export class MySkillsModule {}

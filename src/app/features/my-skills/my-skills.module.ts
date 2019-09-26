import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySkillsRoutingModule } from './my-skills-routing.module';
import { MySkillsPageComponent } from './my-skills-page/my-skills-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MySkillsPageComponent],
  imports: [CommonModule, SharedModule, MySkillsRoutingModule],
})
export class MySkillsModule {}

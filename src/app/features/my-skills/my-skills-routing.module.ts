import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MySkillsPageComponent } from './my-skills-page/my-skills-page.component';

const routes: Routes = [{ path: '', component: MySkillsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySkillsRoutingModule {}

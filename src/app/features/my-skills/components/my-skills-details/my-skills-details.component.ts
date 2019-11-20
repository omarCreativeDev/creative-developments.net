import { Component } from '@angular/core';
import { ISkillsSummaryGroup } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';

@Component({
  selector: 'app-my-skills-details',
  templateUrl: './my-skills-details.component.html',
  styleUrls: ['./my-skills-details.component.scss'],
})
export class MySkillsDetailsComponent {
  public groups: ISkillsSummaryGroup[] = this.mySkillsSummaryService.groups;

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}
}

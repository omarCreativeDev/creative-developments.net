import { Component } from '@angular/core';
import { ISkillsSummaryGroup } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';

@Component({
  selector: 'app-my-skills-summary',
  templateUrl: './my-skills-summary.component.html',
  styleUrls: ['./my-skills-summary.component.scss'],
})
export class MySkillsSummaryComponent {
  public groups: ISkillsSummaryGroup[] = this.mySkillsSummaryService.groups;

  /**
   * Toggle group skill details visibility
   * @param group ISkillsSummaryGroup
   */
  public toggleVisibility(group: ISkillsSummaryGroup): void {
    this.groups.map(item => (item.active = false));
    group.active = !group.active;
  }

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}
}

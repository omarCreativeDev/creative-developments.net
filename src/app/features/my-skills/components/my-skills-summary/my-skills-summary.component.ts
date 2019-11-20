import { Component } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';

@Component({
  selector: 'app-my-skills-summary',
  templateUrl: './my-skills-summary.component.html',
  styleUrls: ['./my-skills-summary.component.scss'],
})
export class MySkillsSummaryComponent {
  public groups: ISkillGroup[] = this.mySkillsSummaryService.groups;

  /**
   * Toggle group skill details visibility
   * @param group ISkillsSummaryGroup
   */
  public toggleVisibility(group: ISkillGroup): void {
    this.groups.map(item => (item.active = false));
    group.active = !group.active;
    this.mySkillsSummaryService.activeGroup.next(group);
  }

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}
}

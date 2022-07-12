import { Component, Input } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';

@Component({
  selector: 'app-my-skills-summary',
  templateUrl: './my-skills-summary.component.html',
  styleUrls: ['./my-skills-summary.component.scss']
})
export class MySkillsSummaryComponent {
  @Input() public groups: ISkillGroup[];

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}

  /**
   * Toggle group skill details visibility
   * @param group ISkillGroup
   */
  public toggleVisibility(group: ISkillGroup): void {
    this.groups.map((item: ISkillGroup) => (item.active = item.category === group.category));
    this.mySkillsSummaryService.activeGroup$.next(group);
    this.mySkillsSummaryService.groups$.next(this.groups);
  }
}

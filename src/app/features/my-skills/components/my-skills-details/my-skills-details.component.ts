import { Component } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-my-skills-details',
  templateUrl: './my-skills-details.component.html',
  styleUrls: ['./my-skills-details.component.scss'],
})
export class MySkillsDetailsComponent {
  public activeGroup$: BehaviorSubject<ISkillGroup> = this.mySkillsSummaryService.activeGroup;

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}
}

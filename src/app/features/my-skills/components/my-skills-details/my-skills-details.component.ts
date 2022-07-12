import { Component } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-skills-details',
  templateUrl: './my-skills-details.component.html'
})
export class MySkillsDetailsComponent {
  public activeGroup$: Observable<ISkillGroup | null> =
    this.mySkillsSummaryService.activeGroup$.asObservable();

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}
}

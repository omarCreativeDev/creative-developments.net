import { Component, OnInit } from '@angular/core';
import { ISkillGroup, ISkillsResponse } from '@core/model/interfaces';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-my-skills-page',
  templateUrl: './my-skills-page.component.html'
})
export class MySkillsPageComponent implements OnInit {
  public groups: ISkillGroup[];

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}

  ngOnInit() {
    this.mySkillsSummaryService
      .list()
      .pipe(
        take(1),
        map((response: ISkillsResponse) => response.groups)
      )
      .subscribe((skills: ISkillGroup[]) => this.setSkills(skills));
  }

  private setSkills(skills: ISkillGroup[]) {
    this.groups = skills;
    this.groups[2].active = true;
    this.mySkillsSummaryService.activeGroup$.next(this.groups[2]);
    this.mySkillsSummaryService.groups$.next(this.groups);
  }
}

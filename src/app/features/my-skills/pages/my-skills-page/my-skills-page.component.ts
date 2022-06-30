import { Component, OnInit } from '@angular/core';
import { MySkillsSummaryService } from '@core/services/my-skills-summary/my-skills-summary.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-my-skills-page',
  templateUrl: './my-skills-page.component.html'
})
export class MySkillsPageComponent implements OnInit {
  public allSkills: any;

  constructor(private mySkillsSummaryService: MySkillsSummaryService) {}

  ngOnInit() {
    this.mySkillsSummaryService
      .list()
      .pipe(take(1))
      .subscribe((skills: any) => (this.allSkills = skills));
  }
}

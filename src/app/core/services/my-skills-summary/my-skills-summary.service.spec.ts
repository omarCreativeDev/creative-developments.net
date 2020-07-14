import { TestBed } from '@angular/core/testing';

import { MySkillsSummaryService } from './my-skills-summary.service';

describe('MySkillsSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySkillsSummaryService = TestBed.inject(MySkillsSummaryService);
    expect(service).toBeTruthy();
  });
});

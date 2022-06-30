import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MySkillsSummaryService } from './my-skills-summary.service';

describe('MySkillsSummaryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it('should be created', () => {
    const service: MySkillsSummaryService = TestBed.inject(MySkillsSummaryService);
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MySkillsSummaryComponent } from './my-skills-summary.component';

describe('MySkillsSummaryComponent', () => {
  let component: MySkillsSummaryComponent;
  let fixture: ComponentFixture<MySkillsSummaryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MySkillsSummaryComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

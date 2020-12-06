import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MySkillChartComponent } from './my-skill-chart.component';

describe('MySkillChartComponent', () => {
  let component: MySkillChartComponent;
  let fixture: ComponentFixture<MySkillChartComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MySkillChartComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

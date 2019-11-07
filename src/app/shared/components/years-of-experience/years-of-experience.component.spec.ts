import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsOfExperienceComponent } from './years-of-experience.component';

describe('YearsOfExperienceComponent', () => {
  let component: YearsOfExperienceComponent;
  let fixture: ComponentFixture<YearsOfExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YearsOfExperienceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsOfExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

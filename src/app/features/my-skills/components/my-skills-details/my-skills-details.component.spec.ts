import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsDetailsComponent } from './my-skills-details.component';

describe('MySkillsDetailsComponent', () => {
  let component: MySkillsDetailsComponent;
  let fixture: ComponentFixture<MySkillsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySkillsDetailsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

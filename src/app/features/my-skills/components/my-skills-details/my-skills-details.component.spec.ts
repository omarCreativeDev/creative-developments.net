import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsDetailsComponent } from './my-skills-details.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MySkillsDetailsComponent', () => {
  let component: MySkillsDetailsComponent;
  let fixture: ComponentFixture<MySkillsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySkillsDetailsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

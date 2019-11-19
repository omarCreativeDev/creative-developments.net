import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsPageComponent } from './my-skills-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MySkillsPageComponent', () => {
  let component: MySkillsPageComponent;
  let fixture: ComponentFixture<MySkillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySkillsPageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

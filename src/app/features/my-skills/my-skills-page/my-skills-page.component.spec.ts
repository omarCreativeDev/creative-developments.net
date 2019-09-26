import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsPageComponent } from './my-skills-page.component';

describe('MySkillsPageComponent', () => {
  let component: MySkillsPageComponent;
  let fixture: ComponentFixture<MySkillsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MySkillsPageComponent],
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

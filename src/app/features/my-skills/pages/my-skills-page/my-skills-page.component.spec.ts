import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MySkillsPageComponent } from './my-skills-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MySkillsPageComponent', () => {
  let component: MySkillsPageComponent;
  let fixture: ComponentFixture<MySkillsPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MySkillsPageComponent],
        imports: [HttpClientTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

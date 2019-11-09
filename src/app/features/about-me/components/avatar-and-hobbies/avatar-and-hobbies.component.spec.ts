import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAndHobbiesComponent } from './avatar-and-hobbies.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AvatarAndHobbiesComponent', () => {
  let component: AvatarAndHobbiesComponent;
  let fixture: ComponentFixture<AvatarAndHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarAndHobbiesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarAndHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

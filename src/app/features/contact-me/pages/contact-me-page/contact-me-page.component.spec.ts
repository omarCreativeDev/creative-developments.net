import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMePageComponent } from './contact-me-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ContactMePageComponent', () => {
  let component: ContactMePageComponent;
  let fixture: ComponentFixture<ContactMePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMePageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMePageComponent } from './contact-me-page.component';

describe('ContactMePageComponent', () => {
  let component: ContactMePageComponent;
  let fixture: ComponentFixture<ContactMePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMePageComponent],
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

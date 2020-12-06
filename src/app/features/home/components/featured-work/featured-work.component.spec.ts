import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeaturedWorkComponent } from './featured-work.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FeaturedWorkComponent', () => {
  let component: FeaturedWorkComponent;
  let fixture: ComponentFixture<FeaturedWorkComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FeaturedWorkComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

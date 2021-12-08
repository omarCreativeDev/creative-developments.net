import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecommendationsComponent } from './recommendations.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RecommendationsComponent', () => {
  let component: RecommendationsComponent;
  let fixture: ComponentFixture<RecommendationsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RecommendationsComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO fix
  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});

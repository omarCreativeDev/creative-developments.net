import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsIDoComponent } from './things-i-do.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ThingsIDoComponent', () => {
  let component: ThingsIDoComponent;
  let fixture: ComponentFixture<ThingsIDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThingsIDoComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

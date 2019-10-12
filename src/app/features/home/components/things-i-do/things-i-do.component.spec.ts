import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsIDoComponent } from './things-i-do.component';

describe('ThingsIDoComponent', () => {
  let component: ThingsIDoComponent;
  let fixture: ComponentFixture<ThingsIDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThingsIDoComponent],
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

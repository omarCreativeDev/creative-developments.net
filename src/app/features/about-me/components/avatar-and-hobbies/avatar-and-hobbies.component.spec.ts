import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAndHobbiesComponent } from './avatar-and-hobbies.component';

describe('AvatarAndHobbiesComponent', () => {
  let component: AvatarAndHobbiesComponent;
  let fixture: ComponentFixture<AvatarAndHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarAndHobbiesComponent],
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

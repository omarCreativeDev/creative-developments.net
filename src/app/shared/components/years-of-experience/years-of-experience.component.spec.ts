import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { YearsOfExperienceComponent } from "./years-of-experience.component";
jest.mock("moment", () => () => ({
  format: () => "2018–01–30T12:34:56+00:00",
  diff: () => "2018–01–30T12:34:56+00:00"
}));

describe("YearsOfExperienceComponent", () => {
  let component: YearsOfExperienceComponent;
  let fixture: ComponentFixture<YearsOfExperienceComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [YearsOfExperienceComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(YearsOfExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

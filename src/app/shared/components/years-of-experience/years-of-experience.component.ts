import { Component } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-years-of-experience',
  templateUrl: './years-of-experience.component.html',
})
export class YearsOfExperienceComponent {
  private beganDevelopment: Moment = moment('01/03/2008', 'MM-DD-YYYY');
  public yearsOfExperience: number = moment().diff(this.beganDevelopment, 'years');
}

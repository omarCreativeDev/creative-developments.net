import { Component } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
})
export class IntroComponent {
  private beganDevelopment: Moment = moment('01/03/2008', 'MM-DD-YYYY');
  public yearsOfExperience: number = moment().diff(this.beganDevelopment, 'years');
}

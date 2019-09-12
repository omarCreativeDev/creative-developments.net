import { Component } from '@angular/core';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  private beganDevelopment: Moment = moment('01/03/2008', 'MM-DD-YYYY');
  public yearsOfExperience: number = moment().diff(this.beganDevelopment, 'years');
}

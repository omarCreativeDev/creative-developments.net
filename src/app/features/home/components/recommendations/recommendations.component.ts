import { Component } from '@angular/core';
import { IRecommendation } from '@core/model/interfaces';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  public recommendations: IRecommendation[] = [
    {
      date: '',
      feedback: '',
      image: '',
      name: '',
      role: '',
    },
    {
      date: '',
      feedback: '',
      image: '',
      name: '',
      role: '',
    },
    {
      date: '',
      feedback: '',
      image: '',
      name: '',
      role: '',
    },
    {
      date: '',
      feedback: '',
      image: '',
      name: '',
      role: '',
    },
  ];
}

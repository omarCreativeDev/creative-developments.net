import { Component } from '@angular/core';
import { IShowcaseItem } from '@core/model/interfaces';

@Component({
  selector: 'app-featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss'],
})
export class FeaturedWorkComponent {
  public featuredWork: IShowcaseItem[] = [
    {
      caption: 'Featured Work | Interoute | Pricing',
      imageName: 'interoute-pricing',
    },
    {
      caption: 'Featured Work | Interoute | Basket',
      imageName: 'interoute-basket',
    },
    {
      caption: 'Featured Work | Interoute | Quick Deployment',
      imageName: 'interoute-quick-deployment',
    },
  ];
}

import { Component } from '@angular/core';
import { IShowcaseItem } from '@core/model/interfaces';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss'],
})
export class PortfolioItemsComponent {
  public portfolioItems: IShowcaseItem[] = [
    {
      caption: 'Interoute | Pricing',
      imageName: 'interoute-pricing',
    },
    {
      caption: 'Interoute | Basket',
      imageName: 'interoute-basket',
    },
    {
      caption: 'Interoute | Deployment',
      imageName: 'interoute-quick-deployment',
    },
  ];
}

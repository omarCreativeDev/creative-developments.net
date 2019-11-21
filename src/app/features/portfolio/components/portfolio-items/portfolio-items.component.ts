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
    {
      caption: 'AUDI UK | My Audi | Car Details',
      imageName: 'myAudi-carDetails',
    },
    {
      caption: 'AUDI UK | My Audi | Login',
      imageName: 'myAudi-login',
    },
    {
      caption: 'AUDI UK | My Audi | Profile',
      imageName: 'myAudi-profile',
    },
    {
      caption: 'EF ICE Awards',
      imageName: 'efIceAwards',
    },
    {
      caption: 'EF ICE Awards Tablet',
      imageName: 'efIceAwardsTablet',
    },
    {
      caption: 'EF ICE Awards Mobile',
      imageName: 'efIceAwardsMobile',
    },
    {
      caption: 'Rapid Motor Services',
      imageName: 'rapid-motor-services',
    },
    {
      caption: 'Bizrate UK',
      imageName: 'bizrateUK',
    },
    {
      caption: 'Bizrate DE',
      imageName: 'bizrateDE',
    },
    {
      caption: 'Cybershop UK',
      imageName: 'cybershop-uk',
    },
    {
      caption: 'Uz Fashion Ebay Shop',
      imageName: 'uz-fashion',
    },
    {
      caption: 'Uz Fashion Logo',
      imageName: 'uz-fashion-logo',
    },
    {
      caption: 'Purina | Together We Can',
      imageName: 'together-we-can-recycle',
    },
    {
      caption: 'Shop BlackBerry',
      imageName: 'shop-blackberry',
    },
    {
      caption: 'Affair Travel',
      imageName: 'affair-travel',
    },
    {
      caption: 'Affair Travel Email',
      imageName: 'affair-travel-email',
    },
    {
      caption: 'Air Transat',
      imageName: 'airtransat',
    },
    {
      caption: 'Canadian Affair',
      imageName: 'canadian-affair',
    },
    {
      caption: 'Lawson Rutter',
      imageName: 'lawson-rutter',
    },
    {
      caption: 'Go Compare Broadband',
      imageName: 'gocompare-broadband',
    },
    {
      caption: 'I Spy Tracking',
      imageName: 'i-spy-tracking',
    },
    {
      caption: 'Confused Broadband',
      imageName: 'confused-broadband',
    },
  ];
}

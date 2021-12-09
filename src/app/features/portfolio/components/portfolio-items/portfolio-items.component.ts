import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IShowcaseItem } from '@core/model/interfaces';
import { NgxMasonryComponent } from 'ngx-masonry';
const imagesLoaded = require('imagesloaded');

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss'],
})
export class PortfolioItemsComponent implements AfterViewInit {
  @ViewChild('masonryEl') public masonryEl: NgxMasonryComponent;
  public imagesLoaded: typeof imagesLoaded;
  public portFolioLoading = true;
  public portfolioItems: IShowcaseItem[] = [
    {
      caption: 'Addison Lee | Booking Desktop',
      imageName: 'addison-lee-booking-desktop',
    },
    {
      caption: 'Addison Lee | Booking Mobile',
      imageName: 'addison-lee-booking-mobile',
    },
    {
      caption: 'Addison Lee | Dashboard Desktop',
      imageName: 'addison-lee-dashboard-desktop',
    },
    {
      caption: 'Addison Lee | Dashboard Mobile',
      imageName: 'addison-lee-dashboard-mobile',
    },
    {
      caption: 'Nhs | revalidation',
      imageName: 'nhs-revalidation',
    },
    {
      caption: 'Nhs | Evidence',
      imageName: 'nhs-evidence',
    },
    {
      caption: 'Nhs | Concerns',
      imageName: 'nhs-concerns',
    },
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
      caption: 'AUDI UK | Car Details',
      imageName: 'myAudi-carDetails',
    },
    {
      caption: 'AUDI UK | Login',
      imageName: 'myAudi-login',
    },
    {
      caption: 'AUDI UK | Profile',
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

  ngAfterViewInit(): void {
    this.imagesLoaded = new imagesLoaded(document.querySelectorAll('.masonry-item'), () => {
      this.masonryEl.layout();
      this.portFolioLoading = false;
    });
  }
}

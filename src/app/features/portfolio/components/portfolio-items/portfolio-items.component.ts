import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IShowcaseItem } from '@core/model/interfaces';
import { NgxMasonryComponent } from 'ngx-masonry';
const imagesLoaded = require('imagesloaded');

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styleUrls: ['./portfolio-items.component.scss']
})
export class PortfolioItemsComponent implements AfterViewInit {
  @ViewChild('masonryEl') public masonryEl: NgxMasonryComponent;
  public imagesLoaded: typeof imagesLoaded;
  public portFolioLoading = true;
  public portfolioItems: IShowcaseItem[] = [
    {
      caption: 'Skills For Care | User accounts',
      imageName: 'skills-for-care-user-accounts.png'
    },
    {
      caption: 'Skills For Care | Edit account details',
      imageName: 'skills-for-care-edit-account-details.png'
    },
    {
      caption: 'Skills For Care | Edit account permissions',
      imageName: 'skills-for-care-edit-account-permissions.png'
    },
    {
      caption: 'Addison Lee | Booking Desktop',
      imageName: 'addison-lee-booking-desktop.jpg'
    },
    {
      caption: 'Addison Lee | Booking Mobile',
      imageName: 'addison-lee-booking-mobile.jpg'
    },
    {
      caption: 'Addison Lee | Dashboard Desktop',
      imageName: 'addison-lee-dashboard-desktop.jpg'
    },
    {
      caption: 'Addison Lee | Dashboard Mobile',
      imageName: 'addison-lee-dashboard-mobile.jpg'
    },
    {
      caption: 'Nhs | revalidation',
      imageName: 'nhs-revalidation.jpg'
    },
    {
      caption: 'Nhs | Evidence',
      imageName: 'nhs-evidence.jpg'
    },
    {
      caption: 'Nhs | Concerns',
      imageName: 'nhs-concerns.jpg'
    },
    {
      caption: 'Interoute | Pricing',
      imageName: 'interoute-pricing.jpg'
    },
    {
      caption: 'Interoute | Basket',
      imageName: 'interoute-basket.jpg'
    },
    {
      caption: 'Interoute | Deployment',
      imageName: 'interoute-quick-deployment.jpg'
    },
    {
      caption: 'AUDI UK | Car Details',
      imageName: 'myAudi-carDetails.jpg'
    },
    {
      caption: 'AUDI UK | Login',
      imageName: 'myAudi-login.jpg'
    },
    {
      caption: 'AUDI UK | Profile',
      imageName: 'myAudi-profile.jpg'
    },
    {
      caption: 'EF ICE Awards',
      imageName: 'efIceAwards.jpg'
    },
    {
      caption: 'EF ICE Awards Tablet',
      imageName: 'efIceAwardsTablet.jpg'
    },
    {
      caption: 'EF ICE Awards Mobile',
      imageName: 'efIceAwardsMobile.jpg'
    },
    {
      caption: 'Rapid Motor Services',
      imageName: 'rapid-motor-services.jpg'
    },
    {
      caption: 'Bizrate UK',
      imageName: 'bizrateUK.jpg'
    },
    {
      caption: 'Bizrate DE',
      imageName: 'bizrateDE.jpg'
    },
    {
      caption: 'Uz Fashion Logo',
      imageName: 'uz-fashion-logo.jpg'
    },
    {
      caption: 'Purina | Together We Can',
      imageName: 'together-we-can-recycle.jpg'
    },
    {
      caption: 'Shop BlackBerry',
      imageName: 'shop-blackberry.jpg'
    },
    {
      caption: 'Air Transat',
      imageName: 'airtransat.jpg'
    },
    {
      caption: 'Canadian Affair',
      imageName: 'canadian-affair.jpg'
    },
    {
      caption: 'Lawson Rutter',
      imageName: 'lawson-rutter.jpg'
    },
    {
      caption: 'Go Compare Broadband',
      imageName: 'gocompare-broadband.jpg'
    },
    {
      caption: 'Confused Broadband',
      imageName: 'confused-broadband.jpg'
    }
  ];

  ngAfterViewInit(): void {
    this.imagesLoaded = new imagesLoaded(document.querySelectorAll('.masonry-item'), () => {
      this.masonryEl.layout();
      this.portFolioLoading = false;
    });
  }
}

import { Component } from '@angular/core';
import { faCode, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faGooglePlusG, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public faCode: IconDefinition = faCode;
  public faArrowUp: IconDefinition = faArrowUp;
  public faSkype: IconDefinition = faSkype;
  public faLinkedinIn: IconDefinition = faLinkedinIn;
  public faTwitter: any = faTwitter;
  public faGooglePlusG: IconDefinition = faGooglePlusG;

  public currentYear(): number {
    return new Date().getFullYear();
  }

}

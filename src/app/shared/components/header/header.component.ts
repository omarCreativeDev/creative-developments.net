import { Component } from '@angular/core';
import { faBitbucket, faGithub, faLinkedinIn, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public faSkype: IconDefinition = faSkype;
  public faLinkedinIn: IconDefinition = faLinkedinIn;
  public faTwitter: any = faTwitter;
  public faGithub: IconDefinition = faGithub;
  public faBitbucket: IconDefinition = faBitbucket;
}

import { Component } from '@angular/core';
import { faCode, faArrowUp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faInternetExplorer,
  faLinkedinIn,
  faSkype,
  faTwitter,
  faOpera,
  faChrome,
  faFirefox,
  faSafari,
  faAndroid,
  faApple,
  faLinux,
  faGithub,
  faBitbucket,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public faAndroid: IconDefinition = faAndroid;
  public faApple: IconDefinition = faApple;
  public faArrowUp: IconDefinition = faArrowUp;
  public faChrome: IconDefinition = faChrome;
  public faCode: IconDefinition = faCode;
  public faFirefox: IconDefinition = faFirefox;
  public faInternetExplorer: IconDefinition = faInternetExplorer;
  public faLinkedinIn: IconDefinition = faLinkedinIn;
  public faLinux: IconDefinition = faLinux;
  public faOpera: IconDefinition = faOpera;
  public faSafari: IconDefinition = faSafari;
  public faSkype: IconDefinition = faSkype;
  public faTwitter: IconDefinition = faTwitter;
  public faGithub: IconDefinition = faGithub;
  public faBitbucket: IconDefinition = faBitbucket;
  public faEnvelope: IconDefinition = faEnvelope;
  public faPhone: IconDefinition = faPhone;
}

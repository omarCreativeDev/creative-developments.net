import { Component } from '@angular/core';
import { faArrowUp, faCode, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faBitbucket,
  faChrome,
  faFirefox,
  faGithub,
  faInternetExplorer,
  faOpera,
  faSafari
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public faArrowUp: IconDefinition = faArrowUp;
  public faBitbucket: IconDefinition = faBitbucket;
  public faChrome: IconDefinition = faChrome;
  public faCode: IconDefinition = faCode;
  public faEnvelope: IconDefinition = faEnvelope;
  public faFirefox: IconDefinition = faFirefox;
  public faGithub: IconDefinition = faGithub;
  public faInternetExplorer: IconDefinition = faInternetExplorer;
  public faOpera: IconDefinition = faOpera;
  public faPhone: IconDefinition = faPhone;
  public faSafari: IconDefinition = faSafari;
}

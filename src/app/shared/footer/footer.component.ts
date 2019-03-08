import { Component } from '@angular/core';
import { faCode, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public faCode: IconDefinition = faCode;
  public faArrowUp: IconDefinition = faArrowUp;

  public currentYear(): number {
    return new Date().getFullYear();
  }

}

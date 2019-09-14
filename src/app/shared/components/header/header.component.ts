import { Component } from '@angular/core';
import { faSkype, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPrint } from '@fortawesome/free-solid-svg-icons';
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
  public faPrint: IconDefinition = faPrint;

  public print(): void {
    window.print();
  }
}

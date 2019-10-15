import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faCss3Alt, faJs, faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-things-i-do',
  templateUrl: './things-i-do.component.html',
  styleUrls: ['./things-i-do.component.scss'],
})
export class ThingsIDoComponent {
  public faJs: IconDefinition = faJs;
  public faCss3Alt: IconDefinition = faCss3Alt;
  public faHtml5: IconDefinition = faHtml5;
}

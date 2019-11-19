import { Component } from '@angular/core';
import { ISkillsSummaryGroup } from '@core/model/interfaces';

@Component({
  selector: 'app-my-skills-summary',
  templateUrl: './my-skills-summary.component.html',
  styleUrls: ['./my-skills-summary.component.scss'],
})
export class MySkillsSummaryComponent {
  public groups: ISkillsSummaryGroup[] = [
    { label: 'UI Stack', skills: ['HTML5', 'CSS3', 'CSS Grid', 'Responsive design', 'SASS / LESS', 'Flexbox', 'BEM'] },
    { label: 'UI Libraries', skills: ['Angular material', 'Bootstrap', 'GOV.UK design system (GDS)', 'Clarity UI'] },
    {
      label: 'Javascript stack',
      skills: [
        'Javascript',
        'ES6',
        'Typescript',
        'RxJs',
        'Angular',
        'Webpack',
        'RESTful API’s',
        'Node',
        'NPM / Yarn',
        'Moment',
        'Lo dash',
        'React',
      ],
    },
    { label: 'Unit testing', skills: ['Jasmine', 'Karma', 'Mocha', 'Chai'] },
  ];
}

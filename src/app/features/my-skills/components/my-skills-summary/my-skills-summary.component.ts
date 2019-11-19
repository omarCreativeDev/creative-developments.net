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
    { label: 'E2E testing', skills: ['Protractor', 'Gherkin', 'Selenium', 'Webdriver IO'] },
    { label: 'Data Visualisation', skills: ['Highcharts', 'Ng2 charts'] },
    { label: 'REST', skills: ['RESTful API', 'Swagger', 'Postman', 'Mocky'] },
    { label: 'Design', skills: ['Photoshop', 'Sketch', 'Invision'] },
    { label: 'State management', skills: ['NGRX', 'NGXS'] },
    { label: 'Code reviews', skills: ['Pull requests', 'Pair programming', 'Crucible'] },
    { label: 'Devops', skills: ['Travis', 'Jenkins', 'Amazon web services', 'Docker'] },
  ];
}

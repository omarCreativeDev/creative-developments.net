import { Injectable } from '@angular/core';
import { ISkillsSummaryGroup } from '@core/model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MySkillsSummaryService {
  public groups: ISkillsSummaryGroup[] = [
    {
      label: 'UI Stack',
      active: false,
      skills: ['HTML5', 'CSS3', 'CSS Grid', 'Responsive design', 'SASS / LESS', 'Flexbox', 'BEM'],
    },
    {
      label: 'UI Libraries',
      active: false,
      skills: ['Angular material', 'Bootstrap', 'GOV.UK design system (GDS)', 'Clarity UI'],
    },
    {
      label: 'Javascript stack',
      active: true,
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
    { label: 'Unit testing', active: false, skills: ['Jasmine', 'Karma', 'Mocha', 'Chai'] },
    { label: 'E2E testing', active: false, skills: ['Protractor', 'Gherkin', 'Selenium', 'Webdriver IO'] },
    { label: 'Data Visualisation', active: false, skills: ['Highcharts', 'Ng2 charts'] },
    { label: 'REST', active: false, skills: ['RESTful API', 'Swagger', 'Postman', 'Mocky'] },
    { label: 'Design', active: false, skills: ['Photoshop', 'Sketch', 'Invision'] },
    { label: 'State management', active: false, skills: ['NGRX', 'NGXS'] },
    { label: 'Code reviews', active: false, skills: ['Pull requests', 'Pair programming', 'Crucible'] },
    { label: 'Devops', active: false, skills: ['Travis', 'Jenkins', 'Amazon web services', 'Docker'] },
  ];
}

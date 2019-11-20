import { Injectable } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MySkillsSummaryService {
  public groups: ISkillGroup[] = [
    {
      label: 'UI Stack',
      active: false,
      skills: [
        { name: 'HTML5', rating: '100' },
        { name: 'CSS3', rating: '100' },
        { name: 'CSS Grid', rating: '85' },
        { name: 'Responsive design', rating: '100' },
        { name: 'SASS / LESS', rating: '97' },
        { name: 'Flexbox', rating: '90' },
        { name: 'BEM', rating: '90' },
      ],
    },
    {
      label: 'UI Libraries',
      active: false,
      skills: [
        { name: 'Angular material', rating: '90' },
        { name: 'Bootstrap', rating: '95' },
        { name: 'GOV.UK design system (GDS)', rating: '90' },
        { name: 'Clarity UI', rating: '85' },
      ],
    },
    {
      label: 'Javascript stack',
      active: true,
      skills: [
        { name: 'Javascript', rating: '90' },
        { name: 'ES6', rating: '90' },
        { name: 'Typescript', rating: '90' },
        { name: 'RxJs', rating: '85' },
        { name: 'Angular', rating: '95' },
        { name: 'Webpack', rating: '90' },
        { name: 'Node', rating: '60' },
        { name: 'NPM / Yarn', rating: '90' },
        { name: 'Moment', rating: '90' },
        { name: 'Lo dash', rating: '90' },
        { name: 'React', rating: '50' },
      ],
    },
    {
      label: 'Unit testing',
      active: false,
      skills: [
        { name: 'Jasmine', rating: '90' },
        { name: 'Karma', rating: '85' },
        { name: 'Mocha', rating: '80' },
        { name: 'Chai', rating: '80' },
      ],
    },
    {
      label: 'E2E testing',
      active: false,
      skills: [
        { name: 'Protractor', rating: '85' },
        { name: 'Gherkin', rating: '85' },
        { name: 'Selenium', rating: '75' },
        { name: 'Webdriver IO', rating: '75' },
      ],
    },
    {
      label: 'Data Visualisation',
      active: false,
      skills: [{ name: 'Highcharts', rating: '85' }, { name: 'Ng2 charts', rating: '85' }],
    },
    {
      label: 'REST',
      active: false,
      skills: [
        { name: 'RESTful API', rating: '85' },
        { name: 'Swagger', rating: '75' },
        { name: 'Postman', rating: '75' },
        { name: 'Mocky', rating: '85' },
      ],
    },
    {
      label: 'Design',
      active: false,
      skills: [
        { name: 'Photoshop', rating: '75' },
        { name: 'Sketch', rating: '75' },
        { name: 'Invision', rating: '75' },
      ],
    },
    {
      label: 'State management',
      active: false,
      skills: [{ name: 'NGRX', rating: '75' }, { name: 'NGXS', rating: '50' }],
    },
    {
      label: 'Code reviews',
      active: false,
      skills: [
        { name: 'Pull requests', rating: '90' },
        { name: 'Pair programming', rating: '90' },
        { name: 'Crucible', rating: '75' },
      ],
    },
    {
      label: 'Devops',
      active: false,
      skills: [
        { name: 'Travis', rating: '70' },
        { name: 'Jenkins', rating: '65' },
        { name: 'Amazon web services', rating: '50' },
        { name: 'Docker', rating: '65' },
      ],
    },
  ];
  public activeGroup: BehaviorSubject<ISkillGroup> = new BehaviorSubject(this.groups[2]);
}

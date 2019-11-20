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
        { name: 'HTML5', rating: '95' },
        { name: 'CSS3', rating: '90' },
        { name: 'CSS Grid', rating: '80' },
        { name: 'Responsive design', rating: '90' },
        { name: 'SASS / LESS', rating: '90' },
        { name: 'Flexbox', rating: '90' },
        { name: 'BEM', rating: '90' },
      ],
    },
    {
      label: 'UI Libraries',
      active: false,
      skills: [
        { name: 'Angular material', rating: '95' },
        { name: 'Bootstrap', rating: '95' },
        { name: 'GOV.UK design system (GDS)', rating: '95' },
        { name: 'Clarity UI', rating: '95' },
      ],
    },
    {
      label: 'Javascript stack',
      active: true,
      skills: [
        { name: 'Javascript', rating: '95' },
        { name: 'ES6', rating: '95' },
        { name: 'Typescript', rating: '95' },
        { name: 'RxJs', rating: '95' },
        { name: 'Angular', rating: '95' },
        { name: 'Webpack', rating: '95' },
        { name: 'RESTful API’s', rating: '95' },
        { name: 'Node', rating: '95' },
        { name: 'NPM / Yarn', rating: '95' },
        { name: 'Moment', rating: '95' },
        { name: 'Lo dash', rating: '95' },
        { name: 'React', rating: '95' },
      ],
    },
    {
      label: 'Unit testing',
      active: false,
      skills: [
        { name: 'Jasmine', rating: '95' },
        { name: 'Karma', rating: '95' },
        { name: 'Mocha', rating: '95' },
        { name: 'Chai', rating: '95' },
      ],
    },
    {
      label: 'E2E testing',
      active: false,
      skills: [
        { name: 'Protractor', rating: '95' },
        { name: 'Gherkin', rating: '95' },
        { name: 'Selenium', rating: '95' },
        { name: 'Webdriver IO', rating: '95' },
      ],
    },
    {
      label: 'Data Visualisation',
      active: false,
      skills: [{ name: 'Highcharts', rating: '95' }, { name: 'Ng2 charts', rating: '95' }],
    },
    {
      label: 'REST',
      active: false,
      skills: [
        { name: 'RESTful API', rating: '95' },
        { name: 'Swagger', rating: '95' },
        { name: 'Postman', rating: '95' },
        { name: 'Mocky', rating: '95' },
      ],
    },
    {
      label: 'Design',
      active: false,
      skills: [
        { name: 'Photoshop', rating: '95' },
        { name: 'Sketch', rating: '95' },
        { name: 'Invision', rating: '95' },
      ],
    },
    {
      label: 'State management',
      active: false,
      skills: [{ name: 'NGRX', rating: '95' }, { name: 'NGXS', rating: '95' }],
    },
    {
      label: 'Code reviews',
      active: false,
      skills: [
        { name: 'Pull requests', rating: '95' },
        { name: 'Pair programming', rating: '95' },
        { name: 'Crucible', rating: '95' },
      ],
    },
    {
      label: 'Devops',
      active: false,
      skills: [
        { name: 'Travis', rating: '95' },
        { name: 'Jenkins', rating: '95' },
        { name: 'Amazon web services', rating: '95' },
        { name: 'Docker', rating: '95' },
      ],
    },
  ];
  public activeGroup: BehaviorSubject<ISkillGroup> = new BehaviorSubject(this.groups[2]);
}

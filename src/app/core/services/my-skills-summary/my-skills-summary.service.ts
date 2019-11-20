import { Injectable } from '@angular/core';
import { ISkillGroup } from '@core/model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MySkillsSummaryService {
  public groups: ISkillGroup[] = [
    {
      label: 'UI Stack',
      active: false,
      skills: [
        { name: 'HTML5', rating: '' },
        { name: 'CSS3', rating: '' },
        { name: 'CSS Grid', rating: '' },
        { name: 'Responsive design', rating: '' },
        { name: 'SASS / LESS', rating: '' },
        { name: 'Flexbox', rating: '' },
        { name: 'BEM', rating: '' },
      ],
    },
    {
      label: 'UI Libraries',
      active: false,
      skills: [
        { name: 'Angular material', rating: '' },
        { name: 'Bootstrap', rating: '' },
        { name: 'GOV.UK design system (GDS)', rating: '' },
        { name: 'Clarity UI', rating: '' },
      ],
    },
    {
      label: 'Javascript stack',
      active: true,
      skills: [
        { name: 'Javascript', rating: '' },
        { name: 'ES6', rating: '' },
        { name: 'Typescript', rating: '' },
        { name: 'RxJs', rating: '' },
        { name: 'Angular', rating: '' },
        { name: 'Webpack', rating: '' },
        { name: 'RESTful API’s', rating: '' },
        { name: 'Node', rating: '' },
        { name: 'NPM / Yarn', rating: '' },
        { name: 'Moment', rating: '' },
        { name: 'Lo dash', rating: '' },
        { name: 'React', rating: '' },
      ],
    },
    {
      label: 'Unit testing',
      active: false,
      skills: [
        { name: 'Jasmine', rating: '' },
        { name: 'Karma', rating: '' },
        { name: 'Mocha', rating: '' },
        { name: 'Chai', rating: '' },
      ],
    },
    {
      label: 'E2E testing',
      active: false,
      skills: [
        { name: 'Protractor', rating: '' },
        { name: 'Gherkin', rating: '' },
        { name: 'Selenium', rating: '' },
        { name: 'Webdriver IO', rating: '' },
      ],
    },
    {
      label: 'Data Visualisation',
      active: false,
      skills: [{ name: 'Highcharts', rating: '' }, { name: 'Ng2 charts', rating: '' }],
    },
    {
      label: 'REST',
      active: false,
      skills: [
        { name: 'RESTful API', rating: '' },
        { name: 'Swagger', rating: '' },
        { name: 'Postman', rating: '' },
        { name: 'Mocky', rating: '' },
      ],
    },
    {
      label: 'Design',
      active: false,
      skills: [{ name: 'Photoshop', rating: '' }, { name: 'Sketch', rating: '' }, { name: 'Invision', rating: '' }],
    },
    { label: 'State management', active: false, skills: [{ name: 'NGRX', rating: '' }, { name: 'NGXS', rating: '' }] },
    {
      label: 'Code reviews',
      active: false,
      skills: [
        { name: 'Pull requests', rating: '' },
        { name: 'Pair programming', rating: '' },
        { name: 'Crucible', rating: '' },
      ],
    },
    {
      label: 'Devops',
      active: false,
      skills: [
        { name: 'Travis', rating: '' },
        { name: 'Jenkins', rating: '' },
        { name: 'Amazon web services', rating: '' },
        { name: 'Docker', rating: '' },
      ],
    },
  ];
}

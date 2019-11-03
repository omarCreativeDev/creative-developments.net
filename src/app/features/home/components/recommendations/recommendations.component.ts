import { Component } from '@angular/core';
import { IRecommendation } from '@core/model/interfaces';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
})
export class RecommendationsComponent {
  public faQuoteLeft: IconDefinition = faQuoteLeft;
  public faQuoteRight: IconDefinition = faQuoteRight;
  public recommendations: IRecommendation[] = [
    {
      date: 'September 27, 2019',
      feedback:
        'I had the pleasure of working with Omar whilst working on the Adult Social Care Workforce Data Set for Skills ' +
        'for Care. A highly experienced and capable front end developer who was instrumental in transforming service ' +
        'design UIs using the GDS Design System often with in extremely tight deadlines. His delivery was outstanding ' +
        'often providing valuable suggestions or variations with an acute eye for detail. I hope to get to work with ' +
        'Omar again in the future.',
      image: 'richard-tees',
      name: 'Richard Rees',
      role: 'UX Lead at Skills for Care',
    },
    {
      date: 'September 18, 2019',
      feedback:
        'Thorough, tenacious and inquisitive. I worked with Omar on Skills For Care; Omar frontend and I backend. ' +
        'Omar is great to work with, having good Angular skills affording him to build what looked like simple solutions ' +
        'to complex logic. Specifically, we worked together on user uploads. Omar translated the UI designs, inputted ' +
        'his own experience and challenged the backend APIs, all the time driving towards the end goal of a great user ' +
        'experience. ',
      image: 'warren-ayling',
      name: 'Warren Ayling',
      role: 'Independent IT Contractor',
    },
    {
      date: 'February 8, 2019',
      feedback:
        'Omar is one of the nicest and hardest working people I know. He will always strive to produce the best ' +
        'possible solution to a problem and goes the extra mile to deliver software on time with added flair. It was an ' +
        'absolute pleasure working with him, and I would not hesitate to hire him on future projects.',
      image: 'charlie-francis',
      name: 'Charlie Francis',
      role: 'Freelance Fullstack Developer',
    },
    {
      date: 'January 30, 2019',
      feedback:
        'Omar is a talented Frontend Developer with a wide range of skills and a significant attention to ' +
        'detail. He helped creating an environment where each developer had a chance to grow their own skill sets and ' +
        'expertise by learning from each other. Being extremely professional as a developer and a friendly and cheerful ' +
        'person as a colleague. I would certainly welcome the opportunity to work with Omar again.',
      image: 'andrea-pace',
      name: 'Andrea Pace',
      role: 'Head of Web Development at Runpath',
    },
  ];
}

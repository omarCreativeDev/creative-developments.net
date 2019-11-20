export interface IShowcaseItem {
  caption: string;
  imageName: string;
}

export interface IRecommendation {
  date: string;
  feedback: string;
  image: string;
  name: string;
  role: string;
}

export interface ISkillsSummaryGroup {
  label: string;
  skills: string[];
  active: boolean;
}

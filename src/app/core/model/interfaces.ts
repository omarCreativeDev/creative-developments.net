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

export interface ISkillGroup {
  active: boolean;
  label: string;
  skills: ISkillDetails[];
}

export interface ISkillDetails {
  name: string;
  rating: string;
}

export interface IErrorDetails {
  item: string;
  type: IErrorDefinition[];
}

export interface IErrorDefinition {
  name: string | number;
  message: string;
}

export interface IContactForm {
  email: string;
  message: string;
  name: string;
  phone: string;
}

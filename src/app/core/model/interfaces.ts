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

export interface ISkillsResponse {
  _id: string;
  title: string;
  groups: ISkillGroup[];
}

export interface ISkillGroup {
  active: boolean;
  category: string;
  list: ISkillDetails[];
}

export interface ISkillDetails {
  isCore: boolean;
  name: string;
  rating: number;
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

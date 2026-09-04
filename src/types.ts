
export type Page = 'HOME' | 'STORY_FILM' | 'OUR_WORK' | 'OUR_CLIENTS' | 'ABOUT' | 'CONTACT';

export interface Client {
  id: string;
  name: string;
  logo?: string;
  category?: string;
  projectDescription?: string;
  year?: string;
  isFeatured: boolean;
}

export interface Project {
  id: string;
  image: string;
  organisation: string;
  title: string;
  description: string;
}

export interface EnquiryFormData {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  about: string;
  objective: string;
  timing: string;
  additional: string;
}

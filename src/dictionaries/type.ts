type MenuContent = {
  home: string;
  services: string;
  resume: string;
  work: string;
  contact: string;
  button: string;
};

type HomeStats = {
  yearsOfExperience: string;
  projectsCompleted: string;
  technologiesMaastered: string;
  codeCommits: string;
};

type HomeContent = {
  title: string;
  author: string;
  role: string;
  description: string;
  button: string;
  stats: HomeStats;
};

type ServicesItem = {
  title: string;
  description: string;
  href?: string;
};

type ServicesContent = {
  one: ServicesItem;
  two: ServicesItem;
  three: ServicesItem;
  four: ServicesItem;
};

type ResumeCard = {
  title: string;
  description: string;
  badge: string;
};

type AuthorItem = {
  title: string;
  value: string | string[];
};

type Author = {
  name: AuthorItem;
  experience: AuthorItem;
  nationality: AuthorItem;
  freelance: AuthorItem;
  phone: AuthorItem;
  discord: AuthorItem;
  email: AuthorItem;
  languages: AuthorItem;
};

type ResumeItem = {
  menu: string;
  title: string;
  description: string;
  cards?: ResumeCard[];
  author?: Author;
};

type ResumeContent = {
  experience: ResumeItem;
  education: ResumeItem;
  skills: ResumeItem;
  about: ResumeItem;
};

type WorkItem = {
  num: string;
  category?: string;
  title: string;
  description: string;
  technologies: { name: string }[];
  thumbnail: string;
  live?: string;
  github?: string;
};

type WorkContent = {
  projects?: WorkItem[];
};

type ContactForm = {
  title: string;
  description: string;

  serviceOptions: string[];

  placeholders: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    selectService: string;
    message: string;
  };

  button: string;
};

type ContactContent = {
  form: ContactForm;

  phone: { name: string; value: string };
  email: { name: string; value: string };
  address: { name: string; value: string };
};

export type Dictionarie = {
  menu: MenuContent;
  home: HomeContent;
  services: ServicesContent;
  resume: ResumeContent;
  work: WorkContent;
  contact: ContactContent;
};

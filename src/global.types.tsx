export type AUTH = {
  admin: { email: string; id: string }| null;
  token: string;
};

export type MEDIA_TYPE = 'resume' | 'avatar' | 'project';
export type PROJECT_TYPE = 'web' | 'mobile';

export type RETRIEVED_MEDIA = {
  id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};
export type SOCIAL_LINKS = {
  github: string;
  linkedin: string;
};
export type ADMIN = {
  id: string;
  name: string;
  email: string;
  password: string;
  bio: string;
  stacks: string[];
  projects: PROJECT[];
  socials: SOCIAL_LINKS;
  avatar: RETRIEVED_MEDIA;
  resume: RETRIEVED_MEDIA;
  createdAt: string;
  updatedAt: string;
};
export type USER = {
  id: string;
  name: string;
  email: string;
  bio: string;
  stacks: string[];
  projects: PROJECT[];
  avatar: RETRIEVED_MEDIA;
  resume: RETRIEVED_MEDIA;
  socials: SOCIAL_LINKS;
  createdAt: string;
  updatedAt: string;
};

export type PROJECT = {
  id: string;
  admin_id: string;
  type: PROJECT_TYPE;
  title: string 
  description: string;
  snapshots: RETRIEVED_MEDIA[];
  live_link: string;
  source_code_link: string;
  stack:string[]
  createdAt: string;
  updatedAt: string;
};
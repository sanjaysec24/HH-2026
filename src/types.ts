export interface BuilderData {
  id?: string;
  handle?: string;
  role?: string;
  stack?: string;
  title?: string;
  avatarUrl?: string;
  location?: string;
  project?: string;
  goaVibe?: string;
  skills?: string[];
  verified?: boolean;
  twitter?: string;
  github?: string;
  serialNumber?: string;
  checkedInAt?: string;
  selectedStickers?: string[];
  passColor?: string;
  passNumber?: string;
  createdAt?: string;
  selfieUrl: string;
  selfieName?: string;
  selfieSize?: string;
  fullName: string;
  builderStack?: string;
  currentRole?: string;
  city?: string;
  oneWord?: string;
  builderTitle?: string;
}

export type BuilderProfile = BuilderData;

export enum Step {
  Welcome = 1,
  Selfie = 2,
  Profile = 3,
  Generating = 4,
  Pass = 5,
}

export const BUILDER_TITLES = [
  'Prompt Wizard',
  'API Explorer',
  'Code Surfer',
  'Cloud Captain',
  'Frontend Artist',
  'Backend Beast',
  'Hackathon Hero',
  'Startup Dreamer',
  'AI Explorer',
  'Innovation Engine',
  'Design Thinker',
  'Open Source Hero',
  'Pixel Architect',
  'Creative Builder',
  'Future Founder',
] as const;

export const STACK_OPTIONS = [
  'AI / ML',
  'Full Stack',
  'Frontend',
  'Backend',
  'Mobile',
  'Cloud',
  'Cybersecurity',
  'Data Science',
  'Blockchain',
  'DevOps',
  'AR / VR',
  'Game Dev',
  'IoT',
  'Student',
  'Other',
] as const;

export const ROLE_OPTIONS = [
  'Student',
  'Developer',
  'Founder',
  'Designer',
  'Engineer',
  'Researcher',
  'Creator',
  'Product Manager',
  'Community Builder',
  'Mentor',
  'Other',
] as const;

export const CITY_SUGGESTIONS = [
  'Chennai',
  'Bengaluru',
  'Hyderabad',
  'Mumbai',
  'Delhi',
  'Pune',
  'Ahmedabad',
  'Coimbatore',
  'Kochi',
  'Jaipur',
  'Goa',
  'Kolkata',
  'Chandigarh',
  'Indore',
  'Noida',
  'Gurugram',
  'San Francisco',
  'London',
  'Singapore',
  'Berlin',
  'Tokyo',
  'Toronto',
  'Sydney',
  'New York',
  'Dubai',
  'Paris',
  'Amsterdam',
  'Seattle',
  'Austin',
  'Zurich',
] as const;

export const ONE_WORD_SUGGESTIONS = [
  'Builder',
  'Fearless',
  'Curious',
  'Creative',
  'Innovator',
  'Dreamer',
  'Explorer',
  'Relentless',
  'Visionary',
  'Founder',
  'Maker',
  'Problem Solver',
  'Learner',
  'Optimist',
  'Thinker',
  'Ambitious',
  'Bold',
  'Passionate',
  'Resilient',
  'Inventive',
] as const;

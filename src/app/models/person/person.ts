import { SocialMediaAccount } from "../socialMediaAccount/social-media-account";

export interface Person {
    id: number;
    firstname: string;
    lastname: string;
    socialSkills: string[]; // Assuming socialSkills is an array of strings
    socialMediaAccounts: SocialMediaAccount[]; // Assuming socialMediaAccounts is an array of objects
  }
  
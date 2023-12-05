import { SocialMediaAccount } from "../socialMediaAccount/social-media-account";

export interface Person {
    id: number;
    firstname: string;
    lastname: string;
    socialSkills: string[];
    socialMediaAccounts: SocialMediaAccount[];
  }
  
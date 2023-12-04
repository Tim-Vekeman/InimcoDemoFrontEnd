import { SocialMediaAccount } from "../social-media-account/social-media-account"

export interface Person {
    id : number
    firstname : string
    lastname : string
    social_skills : string[]
    social_media_accounts : SocialMediaAccount[]
}


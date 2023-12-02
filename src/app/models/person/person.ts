import { SocialMediaAccount } from "../social-media-account/social-media-account"

export class Person {
    id : number
    firstname : string
    lastname : string
    social_skills : string[]
    social_media_accounts : SocialMediaAccount[]

    constructor(firstname : string, lastname : string, social_skills : string[], social_media_accounts : SocialMediaAccount[], id? : number) {
        this.id = id ?? 0
        this.firstname = firstname
        this.lastname = lastname
        this.social_skills = social_skills
        this.social_media_accounts = social_media_accounts
    }
}


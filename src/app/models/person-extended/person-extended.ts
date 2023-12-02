import {Person} from '../person/person';
import { SocialMediaAccount } from '../social-media-account/social-media-account';

export class PersonExtended extends Person{
    vowels : number;
    constenants : number;
    fullname : string;
    reversed_fullname : string;
    person_as_json : string;

    constructor(vowels : number, constenants : number, fullname : string, reverse_fullname : string, person : Person) {
        super(person.firstname, person.lastname, person.social_skills, person.social_media_accounts, person.id)
        this.vowels = vowels;
        this.constenants = constenants;
        this.fullname = fullname;
        this.reversed_fullname = reverse_fullname;
        this.person_as_json = JSON.stringify(person);
    }
}

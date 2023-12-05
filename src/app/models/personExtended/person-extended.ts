import {Person} from '../person/person';

export interface PersonExtended extends Person{
    vowels : number;
    constenants : number;
    fullname : string;
    reversedFullname : string;
    personAsJson : Person;
}
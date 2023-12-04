import {Person} from '../person/person';

export interface PersonExtended extends Person{
    vowels : number;
    constenants : number;
    fullname : string;
    reversed_fullname : string;
    person_as_json : string;
}
import { atom } from 'jotai';
import { Profile } from './profile';

export interface UserState {
    id: Number;
    test: Number;
    profile?: Profile
}

const defaultUserList: UserState[] = [
    {
        test: 1,
        id: 1,
        profile: {
            firstName: "Chris",
            lastName: "Hart",
            phone: "555-555-5555",
            email: "chart@contino.io",
            username: "chart"
        }
    },
    {
        
        test: 1,
        id: 2,
        profile: {
            firstName: "Chris",
            lastName: "Hayen",
            phone: "555-555-5555",
            email: "chayen@contino.io",
            username: "chayen"
        }
    }
];

export const userListAtom = atom(defaultUserList);

import { atom } from 'recoil';
import { Profile } from './profile';

export interface UserState {
    id: Number;
    profile?: Profile
}

const defaultUserList: UserState[] = [
    {
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
        id: 2,
        profile: {
            firstName: "Chris",
            lastName: "Hayen",
            phone: "555-555-5555",
            email: "chart@contino.io",
            username: "chart"
        }
    }
];

export const userListAtom = atom({ key: 'userList', default: defaultUserList });

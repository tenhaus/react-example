import { atom } from 'recoil';
import { Profile } from './profile';

interface User {
    id: Number;
    profile?: Profile
}

const defaultUserList: User[] = [
    {
        id: 1,
        profile: {
            firstName: "Chris",
            lastName: "Hart",
            phone: "555-555-5555",
            email: "chart@contino.io",
            username: "chart"
        }
    }
];

export const userListAtom = atom({ key: 'userList', default: defaultUserList });

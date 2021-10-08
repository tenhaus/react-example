import { atom } from 'recoil';

export interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username?: string;
}

const defaultProfile: Profile = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

export const profileAtom = atom({ key: 'profile', default: defaultProfile });
export const profileSavedAtom = atom({ key: 'profileSaved', default: false });
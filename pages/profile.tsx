import PersonalProfile from '@components/profile/PersonalProfileForm';
import PersonalProfileSaved from '@components/profile/PersonalProfileSaved';

import { profileSavedAtom } from '@store/profile';
import { useRecoilValue } from 'recoil';

export default function ProfilePage() {
  const saved = useRecoilValue(profileSavedAtom);

  if (saved) return <PersonalProfileSaved />;
  else return <PersonalProfile />;
}

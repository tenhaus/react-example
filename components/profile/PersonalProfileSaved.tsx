import { useRecoilState } from 'recoil';
import { profileSavedAtom } from '@store/profile';

export default function PersonalProfileSaved() {
  const [saved, setSaved] = useRecoilState(profileSavedAtom);

  return (
    <div>
      <h1>Your profile has been saved</h1>
      <a href="#" onClick={() => setSaved(!saved)}>
        Edit your profile
      </a>
    </div>
  );
}

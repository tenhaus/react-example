import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { profileAtom, profileSavedAtom, ProfileState } from '@store/profile';

export default function PersonalProfile() {
  // If the profile has been loaded and stored in the redux state
  // this will load it. If not, this will be undefined
  // const profile: Profile | undefined = useAppSelector(selectProfile);
  // const profile: ProfileState | undefined = undefined;
  const [profile, setProfile] = useRecoilState(profileAtom);
  const [, setSaved] = useRecoilState(profileSavedAtom);

  // Initialize our form helper functions
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: profile });

  // When the submit button is pressed and validation has
  // suceeded, this will be called.
  // Dispatch the save event with our form data
  // for redux to handle
  const onSubmit = (data: ProfileState) => {
    setProfile(data);
    setSaved(true);
  };

  // Reset the form if the profile in the redux data model changes
  useEffect(() => {
    reset(profile);
  }, [reset, profile]);

  // Render our form
  return (
    <div>
      <h1>Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <label htmlFor="firstName">First Name</label>
        <br />
        <input id="firstName" {...register('firstName', { required: true })} />
        {errors.firstName && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Last Name */}
        <label htmlFor="firstName">Last Name</label>
        <br />
        <input id="lastName" {...register('lastName', { required: true })} />
        {errors.lastName && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <br />
        <input id="email" {...register('email', { required: true })} />
        {errors.email && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Phone */}
        <label htmlFor="phone">Phone</label>
        <br />
        <input id="phone" {...register('phone', { required: true })} />
        {errors.phone && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Username */}
        <label htmlFor="username">Username</label>
        <br />
        <input id="username" {...register('username', { required: true })} />
        {errors.username && (
          <span className="error-required">This field is required</span>
        )}
        <br />

        {/* Submit */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

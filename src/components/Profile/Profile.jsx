import { AvatarForm, ProfileForm, LogoutButton, DeleteAccaunt, Title, PasswordForm, Hero } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './Profile.module.scss';

const Profile = () => {
  const { user } = useAuth();

  const profileContent = {
    name: 'Mein Profil',
    color: user.color,
  };

  return (
    <>
      <Hero content={profileContent} />
      <div className={css.Profile}>
        <AvatarForm user={user} />
        <Title tag="h1" size="h4">
          {user.name}
        </Title>
        <p className={`${css.Status} ${user.status === 'free' ? '' : css.Pro}`}>
          <span>{user.status} accaunt</span>
        </p>
        <div className={css.ProfileSection}>
          <Title tag="h2" size="h6">
            Profil Einstellungen
          </Title>
          <hr />
          <ProfileForm user={user} />
        </div>
        <div className={css.ProfileSection}>
          <Title tag="h2" size="h6">
            Passwort ändern
          </Title>
          <hr />
          <PasswordForm userId={user._id} />
        </div>
        <div className={css.ProfileSection}>
          <hr />
          <LogoutButton />
          <DeleteAccaunt />
        </div>
      </div>
    </>
  );
};

export default Profile;

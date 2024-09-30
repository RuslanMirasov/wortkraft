import { AvatarForm, Button, LogoutButton, Title } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './Profile.module.scss';

const Profile = () => {
  const { user } = useAuth();

  return (
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
      </div>
      <div className={css.ProfileSection}>
        <Title tag="h2" size="h6">
          Passwort ändern
        </Title>
        <hr />
      </div>
      <div className={css.ProfileSection}>
        <hr />
        <LogoutButton />
        <Button variant="red" size="small">
          Account löschen
        </Button>
      </div>
    </div>
  );
};

export default Profile;

import { AvatarForm } from '../../components';
import { useAuth } from '../../hooks/useAuth';
import css from './Profile.module.scss';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className={css.Profile}>
      <AvatarForm user={user} />
    </div>
  );
};

export default Profile;

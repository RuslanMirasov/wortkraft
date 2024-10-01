import Link from 'next/link';
import { useAuth } from '../../../hooks/useAuth';
import { Icon, Avatar, LoginButton } from '../../../components';
import css from './ProfileLink.module.scss';

const ProfileLink = () => {
  const { isLogin, user } = useAuth();

  return (
    <div className={css.ProfileLink}>
      {isLogin ? (
        <>
          <span className={css.Name}>
            <i>Hallo</i>
            <i>{user.name}</i>
          </span>

          <Link href="/profile">
            <Avatar avatar={user.avatar} color={user.color} email={user.email} />
          </Link>

          <Link href="/profile" className={css.Button}>
            <Icon name="settings" size="24" />
          </Link>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default ProfileLink;

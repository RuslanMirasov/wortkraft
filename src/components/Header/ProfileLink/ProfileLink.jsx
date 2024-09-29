import Link from 'next/link';
import { usePopup } from '../../../hooks/usePopup';
import { useAuth } from '../../../hooks/useAuth';
import { Icon, Avatar } from '../../../components';
import css from './ProfileLink.module.scss';

const ProfileLink = () => {
  const { isLogin, user } = useAuth();
  const { popupOpen } = usePopup();

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
        <button className={css.login} onClick={() => popupOpen('login')}>
          <span>Anmelden</span> <Icon name="login" size="24" />
        </button>
      )}
    </div>
  );
};

export default ProfileLink;

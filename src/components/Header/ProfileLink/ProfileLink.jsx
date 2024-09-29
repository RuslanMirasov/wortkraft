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
          <Link href="/profile" className={css.Button}>
            <Icon name="settings" size="24" />
          </Link>

          <Link href="/profile">
            <Avatar user={user} />
          </Link>
        </>
      ) : (
        <button class={css.login} onClick={() => popupOpen('login')}>
          <span>Anmelden</span> <Icon name="login" size="24" />
        </button>
      )}
    </div>
  );
};

export default ProfileLink;

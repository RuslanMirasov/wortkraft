import Link from 'next/link';
import { usePopup } from '../../../hooks/usePopup';
import { Icon, Avatar } from '../../../components';
import css from './ProfileLink.module.scss';

const ProfileLink = () => {
  const { popupOpen } = usePopup();
  return (
    <div className={css.ProfileLink} onClick={() => popupOpen('login')}>
      <Link href="/profile" className={css.Button}>
        <Icon name="settings" size="24" />
      </Link>

      <Link href="/profile">
        <Avatar />
      </Link>
    </div>
  );
};

export default ProfileLink;

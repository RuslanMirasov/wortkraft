import Link from 'next/link';
import { Icon, Avatar } from '../../../components';
import css from './ProfileLink.module.scss';

const ProfileLink = () => {
  return (
    <div className={css.ProfileLink}>
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

import Image from 'next/image';
import css from './Avatar.module.scss';

const Avatar = ({ avatar, email, color }) => {
  return (
    <div className={css.Avatar}>
      {avatar ? (
        <Image src={avatar} alt="User avatar" width="350" height="350" />
      ) : (
        <div className={css.CustomAvatar} style={{ backgroundColor: color }}>
          {email[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;

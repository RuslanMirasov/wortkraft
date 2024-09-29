import Image from 'next/image';
import css from './Avatar.module.scss';

const Avatar = ({ user }) => {
  const { avatar, email } = user;
  const avatarColors = ['#3F80BC', '#3FBC71', '#F1A635', '#F62020', '#27B4AB'];
  const colorNumber = Math.floor(Math.random() * 5);

  return (
    <div className={css.Avatar}>
      {avatar ? (
        <Image src={avatar} alt="User avatar" width="40" height="40" />
      ) : (
        <div className={css.CustomAvatar} style={{ backgroundColor: avatarColors[colorNumber] }}>
          {email[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;

import { ImageWrapp } from '../../components';
import css from './Avatar.module.scss';

const Avatar = ({ avatar, email, color }) => {
  return (
    <div className={css.Avatar}>
      {avatar ? (
        <ImageWrapp src={avatar} alt="User avatar" width="400" height="400" />
      ) : (
        <div className={css.CustomAvatar} style={{ backgroundColor: color }}>
          {email[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;

import Image from 'next/image';
import css from './Avatar.module.scss';

const Avatar = () => {
  return (
    <div className={css.Avatar}>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/019/896/026/original/male-user-avatar-icon-in-black-colors-person-signs-illustration-png.png"
        alt="User avatar"
        width="40"
        height="40"
      />
    </div>
  );
};

export default Avatar;

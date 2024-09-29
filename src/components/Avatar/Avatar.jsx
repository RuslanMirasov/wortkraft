import Image from 'next/image';
import { useState, useEffect } from 'react';
import css from './Avatar.module.scss';

const Avatar = ({ user }) => {
  const { avatar, email } = user;
  const avatarColors = ['#3F80BC', '#3FBC71', '#F1A635', '#F62020', '#27B4AB'];

  // Сохраняем цвет в состоянии
  const [color, setColor] = useState('');

  useEffect(() => {
    // Генерируем случайный цвет только один раз при монтировании компонента
    const colorNumber = Math.floor(Math.random() * avatarColors.length);
    setColor(avatarColors[colorNumber]);
  }, []); // Пустой массив зависимостей гарантирует, что этот код выполнится только при первом рендере

  return (
    <div className={css.Avatar}>
      {avatar ? (
        <Image src={avatar} alt="User avatar" width="40" height="40" />
      ) : (
        <div className={css.CustomAvatar} style={{ backgroundColor: color }}>
          {email[0]}
        </div>
      )}
    </div>
  );
};

export default Avatar;

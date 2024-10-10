import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { Icon, BookmarkButton } from '../../components';
import css from './Words.module.scss';

const Words = ({ words }) => {
  const { room, setRoom } = useAuth();

  useEffect(() => {
    setRoom(words);
  }, [words]);

  return (
    <ul className={css.Words}>
      {room?.map(({ _id, name, points = 0 }) => (
        <li key={_id} data-points={points}>
          <BookmarkButton wordId={_id} points={points} />
          <span>{name}</span>
          <div>
            <p className={css.Procent}>{points * 20}%</p>
            <Icon name="arrow-right" size="21" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Words;

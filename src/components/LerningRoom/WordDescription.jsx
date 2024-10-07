import { useEffect, useRef } from 'react';
import addWordStyles from '../../utils/addWordStyles';
import { BookmarkButton, GoBack, SoundButton } from '../../components';
import css from './LerningRoom.module.scss';

const WordDescription = ({ wordId, name, translation, step, substep }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      addWordStyles(titleRef.current);
    }
  }, [name]);

  return (
    <div className={css.WordDescription}>
      <GoBack />
      <BookmarkButton position="right" wordId={wordId} points={0} />
      <div className={css.Translation}>
        <h1 ref={titleRef}>{name}</h1>
        <p>{translation}</p>
        <SoundButton name={name} />
      </div>
    </div>
  );
};

export default WordDescription;

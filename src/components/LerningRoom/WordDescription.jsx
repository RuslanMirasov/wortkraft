import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import addWordStyles from '../../utils/addWordStyles';
import { BookmarkButton, GoBack, SoundButton, WriteForm } from '../../components';
import css from './LerningRoom.module.scss';

const WordDescription = ({ wordId, name, translates, step, substep, setResult }) => {
  const { user } = useAuth();
  const [currentTransleteName, setCurrentTransleteName] = useState('');
  const titleRef = useRef(null);

  useEffect(() => {
    const transletesVariants = translates.find(item => item.language === user.language).translation;
    const transleteName = transletesVariants.find(item => item.status === true).name;
    setCurrentTransleteName(transleteName);
  }, [translates]);

  let currentName = name;
  let currentTranslete = '';
  let showSoundButton = true;
  let showForm = false;

  if (step === 1) {
    currentTranslete = currentTransleteName;
    if (substep === 2) {
      currentTranslete = '';
      showSoundButton = false;
    }
  } else if (step === 2) {
    if (substep === 2) {
      showSoundButton = false;
    }
  } else if (step === 3) {
    showSoundButton = false;
    if (substep === 2) {
      currentName = currentTransleteName;
      showForm = true;
    }
  } else if (step === 4) {
    showSoundButton = false;
    if (substep === 2) {
      showForm = true;
      currentName = currentTransleteName;
    }
  } else if (step === 5) {
    showForm = true;
    showSoundButton = false;
    currentName = currentTransleteName;
  }

  useEffect(() => {
    if (name && titleRef.current) {
      addWordStyles(titleRef.current);
    }
  }, [name, step, substep]);

  return (
    <div className={css.WordDescription}>
      <GoBack />
      <BookmarkButton position="right" wordId={wordId} points={0} />
      <div className={css.Translation}>
        <h1 ref={titleRef}>{currentName}</h1>
        {currentTranslete && <p>{currentTranslete}</p>}
        {showSoundButton && <SoundButton name={name} />}
        {showForm && <WriteForm name={name} setResult={setResult} step={step} />}
      </div>
    </div>
  );
};

export default WordDescription;

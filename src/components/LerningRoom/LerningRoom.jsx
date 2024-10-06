import { useEffect, useState } from 'react';
import { Button, RoomHeader, WordDescription } from '../../components';
import css from './LerningRoom.module.scss';

const LerningRoom = ({ word, getNewWord }) => {
  const [point, setPoint] = useState(word.points);
  const [step, setStep] = useState(word.points + 1);
  const { _id, name } = word;

  useEffect(() => {
    setPoint(word.points);
    setStep(word.points + 1);
  }, [word]);

  return (
    <div className={css.LerningRoom}>
      <RoomHeader step={step} point={point} />
      <WordDescription wordId={_id} name={name} translation={step > 1 ? '' : 'Перевод на русский'} />

      <Button icon="arrow-right" onClick={getNewWord} full>
        Weiter gehen
      </Button>
    </div>
  );
};

export default LerningRoom;

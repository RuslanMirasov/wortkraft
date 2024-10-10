import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import fetcher from '../../utils/fatcher';
import { mutate } from 'swr';
import { usePopup } from '../../hooks/usePopup';
import { Title, Button, RoomHeader, WordDescription, Dialog, Quiz } from '../../components';
import css from './LerningRoom.module.scss';

const LerningRoom = ({ word, getRandomWord }) => {
  const { setRoom } = useAuth();
  const { popupOpen } = usePopup();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [point, setPoint] = useState(null);
  const [step, setStep] = useState(null);
  const [substep, setSubstep] = useState(1);
  const { _id, name, examples, translates } = word;

  useEffect(() => {
    if (result === 'win') {
      handleNextStep();
    } else if (result === 'loss') {
      handlePrevStep();
    }
  }, [result]);

  useEffect(() => {
    setPoint(word.points);
    setStep(word.points + 1);
  }, [word]);

  const handleNextStep = () => {
    if (step <= 5) {
      setStep(prev => prev + 1);
      setPoint(prev => prev + 1);
      setSubstep(1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      setPoint(prev => prev - 1);
      setSubstep(1);
    }
  };

  const handleSubmitProgress = async () => {
    setLoading(true);

    const data = {
      id: word._id,
      book: word.book,
      theme: word.theme,
      points: point,
    };

    try {
      await fetcher('/api/user/progress', 'PATCH', data);
      await mutate('/api/auth/user');
    } catch (error) {
      popupOpen('error', `Error ${error.status}`, error.message);
    } finally {
      if (point === 5) {
        setRoom(prevRoom => prevRoom.filter(item => item._id !== _id));
      } else {
        setRoom(prevRoom => prevRoom.map(item => (item._id === _id ? { ...item, points: point } : item)));
      }

      setResult('');
      setLoading(false);
      getRandomWord();
    }
  };

  return (
    <div className={css.LerningRoom}>
      <RoomHeader step={step} point={point} />
      {!result ? (
        <>
          <WordDescription
            wordId={_id}
            name={name}
            translates={translates}
            step={step}
            substep={substep}
            setResult={setResult}
          />

          {substep === 1 && step < 3 && <Dialog examples={examples} />}

          {(substep === 2 && step < 3) || (substep === 1 && step >= 3 && step < 5) ? (
            <Quiz translates={translates} setResult={setResult} step={step} setSubstep={setSubstep} />
          ) : null}

          {substep === 1 && step < 3 && (
            <>
              <Button icon="arrow-right" onClick={() => setSubstep(2)} full>
                Weiter gehen
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          {result === 'win' && (
            <Title tag="h1" size="h1">
              You Win! ({point})
            </Title>
          )}
          {result === 'loss' && (
            <Title tag="h1" size="h1">
              LOSSER! ({point})
            </Title>
          )}
          <Button icon="arrow-right" onClick={handleSubmitProgress} full loading={loading}>
            Weiter gehen
          </Button>
        </>
      )}
    </div>
  );
};

export default LerningRoom;

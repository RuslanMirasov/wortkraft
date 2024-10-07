import { useEffect, useState } from 'react';
import { Button, ButtonList, RoomHeader, WordDescription } from '../../components';
import css from './LerningRoom.module.scss';

const LerningRoom = ({ word, points, getRandomWord }) => {
  const [result, setResult] = useState('winn');
  const [point, setPoint] = useState(points);
  const [step, setStep] = useState(points + 1);
  const [substep, setSubstep] = useState(1);
  const { _id, name } = word;

  useEffect(() => {
    setPoint(points);
    setStep(points + 1);
    setSubstep(1);
    setResult(null);
  }, [points]);

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

  return (
    <div className={css.LerningRoom}>
      <RoomHeader step={step} point={point} />
      {!result && (
        <>
          <h1>{substep}</h1>
          <WordDescription
            wordId={_id}
            name={name}
            translation={step > 1 || substep === 2 ? '' : 'Перевод на русский'}
          />
          {substep === 1 && step < 3 && <div>ДИАЛОГ</div>}
          {(substep === 2 && step < 3) || (substep === 1 && step >= 3 && step < 5) ? (
            <div>
              <h3>Выберите перевод</h3>
              <ul>
                <li>
                  <Button icon="arrow-right" full onClick={handleNextStep}>
                    Перевод 1
                  </Button>
                </li>
                <li>
                  <Button icon="arrow-right" full onClick={handlePrevStep}>
                    Перевод 2
                  </Button>
                </li>
                <li>
                  <Button icon="arrow-right" full onClick={handlePrevStep}>
                    Перевод 3
                  </Button>
                </li>
                <li>
                  <Button icon="arrow-right" full onClick={handlePrevStep}>
                    Перевод 4
                  </Button>
                </li>
              </ul>
            </div>
          ) : null}

          {substep === 1 && (
            <Button icon="arrow-right" onClick={() => setSubstep(2)} full>
              Weiter gehen
            </Button>
          )}

          <ButtonList>
            <Button onClick={handlePrevStep}>-</Button>
            <Button onClick={handleNextStep}>+</Button>
          </ButtonList>
        </>
      )}
      {result && (
        <Button icon="arrow-right" onClick={getRandomWord} full>
          Weiter gehen
        </Button>
      )}
    </div>
  );
};

export default LerningRoom;

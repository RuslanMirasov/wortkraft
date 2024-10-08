import { useEffect, useState } from 'react';

import { Button, ButtonList, RoomHeader, WordDescription } from '../../components';
import css from './LerningRoom.module.scss';

const LerningRoom = ({ word, points, getRandomWord }) => {
  const [result, setResult] = useState('');
  const [point, setPoint] = useState(points);
  const [step, setStep] = useState(points + 1);
  const [substep, setSubstep] = useState(1);
  const { _id, name, examples, translates } = word;

  useEffect(() => {
    setPoint(points);
    setStep(points + 1);
    setSubstep(1);
    setResult('');
  }, [word, points]);

  const handleNextStep = () => {
    if (step <= 5) {
      setStep(prev => prev + 1);
      setPoint(prev => prev + 1);
      setSubstep(1);
      // setResult('winn');
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
      {!result ? (
        <>
          <WordDescription wordId={_id} name={name} translates={translates} step={step} substep={substep} />

          {/* {substep === 1 && step < 3 && <div>ДИАЛОГ</div>} */}

          {/* <div>
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
          </div> */}

          <Button icon="arrow-right" onClick={() => setSubstep(2)} full>
            Step = {step} (sub = {substep})
          </Button>
          <Button icon="arrow-right" onClick={getRandomWord} full>
            Next word
          </Button>
          <ButtonList>
            <Button onClick={handlePrevStep}>-</Button>
            <Button onClick={handleNextStep}>+</Button>
          </ButtonList>
        </>
      ) : (
        <Button icon="arrow-right" onClick={getRandomWord} full>
          You winn / loose
        </Button>
      )}
    </div>
  );
};

export default LerningRoom;

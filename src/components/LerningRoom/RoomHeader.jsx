import css from './LerningRoom.module.scss';

const RoomHeader = ({ step, point }) => {
  return (
    <div className={css.Header}>
      <span data-step={step}>{step > 5 ? 'Gelernt' : `Teil ${step}`}</span>
      <p>
        {step < 3
          ? 'Lesen und Hören'
          : step >= 3 && step < 5
          ? 'Lesen und Schreiben'
          : step === 5
          ? 'Schreiben'
          : 'Sehr gut!'}
      </p>
      <div className={css.Range} data-range={point}></div>
    </div>
  );
};

export default RoomHeader;

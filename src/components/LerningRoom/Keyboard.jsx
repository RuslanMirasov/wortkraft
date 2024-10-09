import css from './LerningRoom.module.scss';

const Keyboard = ({ lettersArr, onLetterClick, disabledLetters }) => {
  return (
    <ul className={css.Keyboard}>
      {lettersArr.map((letter, index) => (
        <li key={index}>
          <button
            type="button"
            onClick={() => onLetterClick(letter, index)}
            disabled={disabledLetters[index] === letter}
          >
            <span>{letter}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Keyboard;

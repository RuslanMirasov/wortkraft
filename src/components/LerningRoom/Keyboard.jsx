import css from './LerningRoom.module.scss';

const Keyboard = ({ lettersArr, onLetterClick, disabledLetters }) => {
  const handleClick = letter => {
    onLetterClick(letter);
  };

  return (
    <ul className={css.Keyboard}>
      {lettersArr.map((letter, index) => (
        <li key={index}>
          <button
            type="button"
            data-letter={letter}
            onClick={() => handleClick(letter)}
            disabled={disabledLetters.includes(letter)}
          >
            {letter}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Keyboard;

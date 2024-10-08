import mixArray from '../../utils/mixArray';
import { useState, useEffect } from 'react';
import { Button, Keyboard } from '../../components';

const WriteForm = ({ name }) => {
  const [lettersArr, setLettersArr] = useState([]);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [value, setValue] = useState('');

  //Cоздаём массив для кнопок клавиатуры в рандомном порядке
  useEffect(() => {
    const mixedArray = mixArray(name.split(''));
    setLettersArr(mixedArray);
  }, [name]);

  //Cоздаём массив нажатых кнопок при изменении value
  useEffect(() => {
    const clickedLetters = value.split('');
    setDisabledLetters(clickedLetters);
  }, [value]);

  const handleLetterClick = letter => {
    setValue(prevValue => prevValue + letter);
  };

  return (
    <form>
      <input
        type="text"
        name="word"
        placeholder="..."
        icon="pencil"
        label="Schreiben Sie das Wort auf Deutsch"
        value={value}
        onChange={e => setValue(e.target.value)}
        required
      />
      <Keyboard lettersArr={lettersArr} disabledLetters={disabledLetters} onLetterClick={handleLetterClick} />
      <Button icon="arrow-right" full variant="black" disabled={value.length < name.length}>
        Prüfen Sie das
      </Button>
    </form>
  );
};

export default WriteForm;

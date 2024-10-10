import mixArray from '../../utils/mixArray';
import { findAllIndexes, getDifference } from '../../utils/stringFunctions';
import { useState, useEffect } from 'react';
import { Button, Text, Keyboard, Icon } from '../../components';

const WriteForm = ({ name, step, setResult }) => {
  const [lettersArr, setLettersArr] = useState([]);
  const [disabledLetters, setDisabledLetters] = useState({});
  const [value, setValue] = useState('');

  useEffect(() => {
    const mixedArray = mixArray(name.split(''));
    setLettersArr(mixedArray);
    setDisabledLetters({});
    setValue('');
  }, [name]);

  const handleLetterClick = (letter, index) => {
    setValue(prevValue => prevValue + letter);
    setDisabledLetters(prev => ({ ...prev, [index]: letter }));
  };

  const handleChange = e => {
    const newValue = e.target.value;
    if (newValue === '') {
      setDisabledLetters({});
      setValue(newValue);
      return;
    }
    const newLetters = getDifference(value, newValue);
    newLetters.split('').forEach(letter => {
      const allIndexes = findAllIndexes(lettersArr, letter);
      for (const index of allIndexes) {
        if (value.length < newValue.length) {
          if (!disabledLetters[index]) {
            setDisabledLetters(prev => ({ ...prev, [index]: letter }));
            break;
          }
        } else {
          if (disabledLetters[index]) {
            setDisabledLetters(prevState => {
              const updatedState = { ...prevState };
              delete updatedState[index];
              return updatedState;
            });
            break;
          }
        }
      }
    });
    setValue(newValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const word = e.target.elements.word.value;
    const result = name === word ? 'win' : 'loss';
    setValue('');
    setResult(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text>Schreiben Sie das Wort auf Deutsch</Text>
      <label>
        <input type="text" name="word" value={value} onChange={handleChange} autoComplete="off" />
        <span>
          <Icon name="pencil" />
        </span>
      </label>

      {step !== 5 && (
        <Keyboard lettersArr={lettersArr} disabledLetters={disabledLetters} onLetterClick={handleLetterClick} />
      )}

      <Button icon="arrow-right" full variant="green" disabled={value.length < name.length}>
        Überprüfen Sie
      </Button>
    </form>
  );
};

export default WriteForm;

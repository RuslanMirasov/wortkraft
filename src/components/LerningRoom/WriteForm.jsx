import mixArray from '../../utils/mixArray';
import { useState, useEffect } from 'react';
import { Button, Text, Keyboard, Icon } from '../../components';

const findAllIndexes = (str, letter) => {
  const indexes = [];
  let currentIndex = str.indexOf(letter); // ищем первое вхождение
  while (currentIndex !== -1) {
    indexes.push(currentIndex);
    currentIndex = str.indexOf(letter, currentIndex + 1); // ищем следующие вхождения
  }
  return indexes;
};

function getDifference(str1, str2) {
  let minLength = Math.min(str1.length, str2.length);
  let index = 0;

  while (index < minLength && str1[index] === str2[index]) {
    index++;
  }

  return str2.slice(index);
}

const WriteForm = ({ name }) => {
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
    if (value.length < newValue.length) {
      // КОГДА ПИШЕМ ТЕКСТ
      const newLetters = getDifference(value, newValue);
      newLetters.split('').forEach(letter => {
        const allIndexes = findAllIndexes(lettersArr, letter);

        for (const index of allIndexes) {
          if (!disabledLetters[index]) {
            setDisabledLetters(prev => ({ ...prev, [index]: letter }));
            break;
          }
        }
      });
    } else {
      // КОГДА СТИРАЕМ ТЕКСТ
      const newLetters = getDifference(newValue, value);
      if (newLetters.length > 1) {
        setDisabledLetters({});
      } else {
        newLetters.split('').forEach(letter => {
          const allIndexes = findAllIndexes(lettersArr, letter);
          console.log(allIndexes);
          for (const index of allIndexes) {
            if (disabledLetters[index]) {
              setDisabledLetters(prevState => {
                const updatedState = { ...prevState };
                delete updatedState[index];
                return updatedState;
              });
              break;
            }
          }
        });
      }
    }

    setValue(newValue);
  };

  return (
    <form>
      <Text>Schreiben Sie das Wort auf Deutsch</Text>
      <label>
        <input type="text" name="word" value={value} onChange={handleChange} autoComplete="off" />
        <span>
          <Icon name="pencil" />
        </span>
      </label>

      <Keyboard lettersArr={lettersArr} disabledLetters={disabledLetters} onLetterClick={handleLetterClick} />
      <Button icon="arrow-right" full variant="green" disabled={value.length < name.length}>
        Überprüfen Sie
      </Button>
    </form>
  );
};

export default WriteForm;

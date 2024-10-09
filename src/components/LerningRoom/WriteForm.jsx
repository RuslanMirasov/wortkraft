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
  let diff = '';
  const charCountStr1 = {};
  const charCountStr2 = {};

  // Считаем количество каждого символа в str1
  for (let char of str1) {
    charCountStr1[char] = (charCountStr1[char] || 0) + 1;
  }

  // Считаем количество каждого символа в str2
  for (let char of str2) {
    charCountStr2[char] = (charCountStr2[char] || 0) + 1;
  }

  // Сравниваем количество символов в str2 с количеством в str1
  for (let char in charCountStr2) {
    const countInStr1 = charCountStr1[char] || 0;
    const countInStr2 = charCountStr2[char];

    // Если в str2 больше символов, добавляем их к разнице
    if (countInStr2 > countInStr1) {
      diff += char.repeat(countInStr2 - countInStr1);
    }
  }

  // Сравниваем количество символов в str1 с количеством в str2 для учета удалённых символов
  for (let char in charCountStr1) {
    const countInStr1 = charCountStr1[char];
    const countInStr2 = charCountStr2[char] || 0;

    // Если в str1 больше символов, добавляем их к разнице
    if (countInStr1 > countInStr2) {
      diff += char.repeat(countInStr1 - countInStr2);
    }
  }

  return diff;
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
      console.log(newLetters);
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
      const newLetters = getDifference(value, newValue);
      if (newValue === '') {
        setDisabledLetters({});
        setValue(newValue);
        return;
      }
      console.log(newLetters);
      newLetters.split('').forEach(letter => {
        const allIndexes = findAllIndexes(lettersArr, letter);
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

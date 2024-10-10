export const findAllIndexes = (str, letter) => {
  const indexes = [];
  let currentIndex = str.indexOf(letter); // ищем первое вхождение
  while (currentIndex !== -1) {
    indexes.push(currentIndex);
    currentIndex = str.indexOf(letter, currentIndex + 1); // ищем следующие вхождения
  }
  return indexes;
};

export const getDifference = (str1, str2) => {
  const charCount = new Map();

  for (const char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str2) {
    charCount.set(char, (charCount.get(char) || 0) - 1);
  }

  return Array.from(charCount.entries()).reduce((diff, [char, count]) => {
    return diff + char.repeat(Math.abs(count));
  }, '');
};

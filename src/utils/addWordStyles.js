const addWordStyles = (element, minFontSize = 24, initialFontSize = 38, defaultFontSize = 46) => {
  const parent = element.parentElement;
  let fontSize = defaultFontSize;
  element.style.fontSize = `${fontSize}px`;

  // Определяем высоту строки
  const lineHeight = fontSize * 1.1; // адаптируйте в зависимости от вашего line-height

  // Проверяем, есть ли перенос строки
  const hasLineBreak = element.scrollHeight > lineHeight;

  if (hasLineBreak) {
    element.style.fontSize = `${initialFontSize}px`;
  }

  // Проверяем ширину, и уменьшаем шрифт, если не помещается в родительский элемент
  while (element.scrollWidth > parent.clientWidth && fontSize > minFontSize) {
    fontSize--;
    element.style.fontSize = `${fontSize}px`;
    console.log(`Reducing font size: ${fontSize}`);
  }

  const text = element.innerText.toLowerCase().trim();

  // Меняем цвет в зависимости от текста
  if (text.startsWith('der ')) {
    element.style.color = 'var(--der-color)';
  } else if (text.startsWith('die ')) {
    element.style.color = 'var(--die-color)';
  } else if (text.startsWith('das ')) {
    element.style.color = 'var(--das-color)';
  } else {
    element.style.color = 'var(--text-color)';
  }
};

export default addWordStyles;

// const addWordStyles = (element, minFontSize = 10, defaultFontSize = 46) => {
//   const parent = element.parentElement;
//   let fontSize = defaultFontSize;
//   element.style.fontSize = `${fontSize}px`;

//   while (
//     (element.scrollWidth > parent.clientWidth || element.scrollHeight > parent.clientHeight) &&
//     fontSize > minFontSize
//   ) {
//     fontSize--;
//     element.style.fontSize = `${fontSize}px`;
//   }

//   const text = element.innerText.toLowerCase().trim();

//   if (text.startsWith('der ')) {
//     element.style.color = 'var(--der-color)';
//   } else if (text.startsWith('die ')) {
//     element.style.color = 'var(--die-color)';
//   } else if (text.startsWith('das ')) {
//     element.style.color = 'var(--das-color)';
//   } else {
//     element.style.color = 'var(--text-color)';
//   }
// };

// export default addWordStyles;

const addWordStyles = (element, minFontSize = 10, defaultFontSize = 46) => {
  const parent = element.parentElement;
  let fontSize = defaultFontSize;
  element.style.fontSize = `${fontSize}px`;

  while (
    (element.scrollWidth > parent.clientWidth || element.scrollHeight > parent.clientHeight) &&
    fontSize > minFontSize
  ) {
    fontSize--;
    element.style.fontSize = `${fontSize}px`;
  }

  const text = element.innerText.toLowerCase().trim();

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

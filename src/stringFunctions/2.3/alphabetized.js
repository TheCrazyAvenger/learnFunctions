export const alphabetized = (text) =>
  text
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()  +]/g, '')
    .split('')
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join('');

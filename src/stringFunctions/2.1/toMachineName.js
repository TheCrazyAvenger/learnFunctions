export const toMachineName = (name, separator) =>
  name
    .replace(/^\d+/, '')
    .trim()
    .replace(/ +/g, ' ')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replace(/[\s]/g, separator)
    .toLocaleLowerCase();

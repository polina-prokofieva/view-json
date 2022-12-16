import { indigo } from 'color-name';

const removeAbbrFromBegin = word => {
  const count = (word.match(/[A-Z]/g) || []).length;
  const isAbbr = /^[A-Z]+$/.test(word);

  if (count > 1 && !isAbbr) {
    return word.slice(0, count - 1) + ' ' + word.slice(count - 1);
  }

  return word;
};

const convertKey = key => {
  if (typeof key !== 'string') return null;

  const words = key.split(/[\s_\-]/);
  const nonEmptyWords = words.filter(word => word);
  const wordPattern = /([A-Z]+$)|(\d+[a-z]+)|(\d+)|(((^[a-z])|[A-Z]+)[a-z]*)/g;
  let parts = [];

  for (let word of nonEmptyWords) {
    const newParts = word.match(wordPattern) || [word];
    parts = parts.concat(newParts);
  }

  return parts ? parts.map(word => removeAbbrFromBegin(word)).join(' ') : key;
};

// const convertByMask = (value, mask) => {
//   const partPattern = /\{(\w|\.)+?\}/g;
//   const key = mask.replace(partPattern, function (part) {
//     const path = part.slice(1, -1).split('.');

//     let convertedKey = value[path[0]];

//     for (let i = 1; i < path.length; i++) {
//       if (convertedKey && convertedKey[path[i]]) {
//         convertedKey = convertedKey[path[i]];
//       } else {
//         convertedKey = '-';
//         break;
//       }
//     }

//     return convertedKey || '-';
//   });

//   return key;
// };

export {
  convertKey,
  // convertByMask
};



// create a function that returns different characters from fromCharCode based on required parameters/argument

const generateCharacters = (startPosition, endPosition) => {
  let characters = [];

  for (let i = startPosition; i <= endPosition; i++) {
    let characterFromChar = String.fromCharCode(i);
    characters.push(characterFromChar);
  }

  return characters;
};

// uppercaseLetters  lowercaseLetters specialCharacters
const uppercaseLetters = generateCharacters(65, 90);
const lowercaseLetters = generateCharacters(97, 122);
const specialCharacters = generateCharacters(33, 47);

// create an array of random characters
function generatePassword() {
  let availableChars = [...uppercaseLetters, ...lowercaseLetters, ...specialCharacters];
  console.log('🚀 ~ file: script.js:24 ~ generatePassword ~ availableChars:', availableChars);

  const passwordLength = 10;

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  return password;
}
const password = generatePassword();

console.log(password);

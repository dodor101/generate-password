// import dom element
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('number');
const lowercaseEl = document.getElementById('lowercase');
const specialEl = document.getElementById('special');
const lengthEl = document.getElementById('length');
const submitBtn = document.querySelector('.submit-btn');
const inputEl = document.querySelector('.number-input');
const form = document.querySelector('.form');
const displayPassword = document.querySelector('#display-password');
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
const numbers = generateCharacters(48, 57);

inputEl.addEventListener('input', syncPasswordLength);
lengthEl.addEventListener('input', syncPasswordLength);

function syncPasswordLength(e) {
  const { value } = e.target;
  inputEl.value = value;
  lengthEl.value = value;
}

// create an array of random characters
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const passwordLength = inputEl.value;
  const includeUppercase = uppercaseEl.checked;
  const includeNumbers = numberEl.checked;
  const includeSpecial = specialEl.checked;

  const password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSpecial);
  displayPassword.innerText = password;
});

/* Write a generatePassword function thats take
num of parameter and conditionally render content on the page.
*/
function generatePassword(passwordLength, includeUppercase, includeNumbers, includeSpecial) {
  let password = '';

  let availableLetters = lowercaseLetters;

  if (includeUppercase) {
    availableLetters = [...availableLetters, ...uppercaseLetters];
  }

  if (includeSpecial) {
    availableLetters = [...availableLetters, ...specialCharacters];
  }
  if (includeNumbers) {
    availableLetters = [...availableLetters, ...numbers];
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * availableLetters.length);
    password += availableLetters[randomIndex];
  }

  return password;
}

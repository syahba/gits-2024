// Javascript Logic Exercise

// Buatlah function bernama reverseString yang mampu melakukan proses pembalikan string!
function reverseString(text) {
  return text.split('').reverse().join('');
};

// TEST CASES
console.log(reverseString('Hello World and Coders'));
console.log(reverseString('John Doe'));
console.log(reverseString('I am a bookworm'));
console.log(reverseString('Coding is my hobby'));
console.log(reverseString('Super'));
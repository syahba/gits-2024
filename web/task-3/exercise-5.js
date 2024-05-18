// Javascript Logic Exercise

/* Diberikan sebuah function yang menerima satu parameter berupa string. 
Function tersebut mengembalikan nilaitrue jika di dalam string tersebut terdapat karakter a dan b 
yang memiliki jarak 3 karakter lain minimal satu kali.Jika tidak ditemukan sama sekali, kembalikan nilai false. */
function threeStepsAB(text) {
  return text[text.indexOf('a') + 4] === 'b' || text[text.indexOf('b') + 4] === 'a' ? true : false;
};

// TEST CASES
console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are boring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));

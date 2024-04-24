// Javascript Logic Exercise

/* Diberikan sebuah function yang menerima dua parameter angka. Function akan me-return nilai true jika
secondNumber lebih besar dari firstNumber, dan false jika sebaliknya. Jika kedua angka bernilai sama, 
functionakan me-return -1. */
function compareNumbers(firstNumber, secondNumber) {
  let res;
  if (secondNumber > firstNumber) {
    res = true;
  } else if (secondNumber < firstNumber) {
    res = false;
  } else {
    res = -1;
  };

  return res;
};

// TEST CASES
console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(17, 2));

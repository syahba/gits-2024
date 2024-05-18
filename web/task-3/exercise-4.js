// Javascript Logic Exercise

/* Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
Function tersebutakan mengembalikan true jika array dari parameter tersebut merupakan deret 
aritmatika dan false jika sebaliknya. */
function isArithmeticProgression(numbers) {
  const d = numbers[1] - numbers[0];
  const selected = numbers.filter((v, i) => numbers[i + 1] - v === d);

  return selected.length === numbers.length - 1 ? true : false;
};

// TEST CASES
console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 6, 18, 54]));
console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));
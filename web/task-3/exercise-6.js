// Javascript Logic Exercise

/* Diberikan sebuah function yang menerima dua parameter angka. Function akan mengembalikan nilai 
FPB (FaktorPersekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang 
dapat membagihabis kedua bilangan tersebut. */
function gcd(firstNumber, secondNumber) {
  const divider = [];

  for (let i = 1; i < firstNumber; i++) {
    if (Number.isInteger(firstNumber / i) && Number.isInteger(secondNumber / i)) {
      divider.push(i);
    };
  };

  return divider[divider.length - 1];
};

// TEST CASES
console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
console.log(gcd(17, 23));

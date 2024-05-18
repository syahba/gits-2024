// Javascript Logic Exercise

/* Diberikan sebuah function yang menerima satu parameter berupa angka. Function akan me-return true 
jika angkatersebut adalah bilangan prima. Jika tidak, return false. */
function isPrime(number) {
  let res = true;

  for (let i = 1; i < number; i++) {
    if (number % i === 0 && i !== 1) {
      res = false;
    };
  };

  return res;
};

// TEST CASES
console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));
// Javascript Logic Exercise

// Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).
function urutHuruf(text) {
  return [...text].sort().join('');
};

// TEST CASES
console.log(urutHuruf('halo'));
console.log(urutHuruf('qwerty'));
console.log(urutHuruf('qwertyuiopasdfghjklzxcvbnm'));

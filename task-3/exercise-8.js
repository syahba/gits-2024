// Javascript Logic Exercise

/* Buatlah function yang me return array berisi angka prima. Function tersebut menerima input 
angkaPertama danangkaKedua, dan mencari semua angka prima yang ada di antara angkaPertama dan angkaKedua. */
function listPrime(angkaPertama, angkaKedua) {
  const prima = [];

  for (let i = angkaPertama; i <= angkaKedua; i++) {
    if (i !== 1) {
      prima.push(i);
    };
    
    for (let j = i - 1; j > 0; j--) {
      if (i % j === 0 && j !== i && j !== 1) {
        prima.splice(prima.indexOf(i), 1);
        break;
      };
    };
  };

  return prima;
};

// TEST CASES
console.log(listPrime(1, 5));
console.log(listPrime(5, 10));
console.log(listPrime(10, 20));
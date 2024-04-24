// Javascript Review

/* A. Buatlah sebuah function. 
B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil. */
const checkDate = () => {
  return getDate();
};

/* A. Buatlah function berikutnya.
B. Function tersebut memberikan tanggal sekarang ketika dipanggil.
C. Cetaklah hasil dari function tersebut. */
const getDate = () => {
  return new Date().toLocaleDateString();
};

console.log(checkDate());

/* A. Buatlah sebuah function yang menerima sebuah angka.
B. Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
C. Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap tersebut 
dalam format string “ganjil” atau “genap”.
D. Tes dengan console log hasil function tersebut dengan angka:2, 3, 20, 21E. 
Tambahkan pengecekan tipe data di function tersebut.
F. Jika data yang diberikan bukan angka yang valid, bukan bertipe data number atau NaN, 
maka langsungreturn “Invalid Data”. */
const evenOrOdd = (number) => {
  if (Number.isInteger(number)) {
    const res = number % 2 === 0 ? 'genap' : 'ganjil';
    return res;
  } else {
    return 'Invalid Data';
  };
};

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(20));
console.log(evenOrOdd('21E'));

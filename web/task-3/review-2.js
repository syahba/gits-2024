// Javascript Review

/* A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
B. Object tersebut harus memiliki property nama_depan(string), nama_belakang(string), hobi(array ofstrings), 
angka_favorit(number), memakai_kacamata(boolean), dan boleh memanambahkan property lainnya. */
const data = {
  nama_depan: 'khalisa',
  nama_belakang: 'syahba',
  hobi: ['nonton', 'main game'],
  angka_favorit: 5,
  memakai_kacamata: false,
};
console.log(data);

// D. Cetak nama_lengkap dengan console.log.
const nama_lengkap = `${data.nama_depan} ${data.nama_belakang}`;
console.log(nama_lengkap);

// E. Ubah angka_favorit jadi 8.
data.angka_favorit = 8;
console.log(data.angka_favorit);

// F. Tambahkan satu hobi "coding".
data.hobi.unshift('coding');
console.log(data.hobi);

// G. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
data['lulusan'] = 'Hacktiv8';
console.log(data);

// H. Cetak semua hobi satu per satu menggunakan loop.
data.hobi.forEach(value => console.log(value));

// I. Cetak semua key milik objek, dan cetak semua values milik objek.
console.log(Object.keys(data));
console.log(Object.values(data));

// J. Gunakan loop untuk cetak semua property milik objek dengan format key : values.
for (key in data) {
  console.log(`${key}: ${data[key]}`);
};

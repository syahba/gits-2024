// Javascript Callback and Promise Practice

/* Buatlah sebuah fungsi loadImage yang akan menerima URL dari sebuah gambar dan sebuah callback function.
Fungsi ini akan membuat elemen img baru dan menetapkan atribut src-nya dengan URL yang diberikan. Gunakan
callback untuk menangani kasus ketika gambar berhasil dan gagal dimuat. */
const loadImage = (url, callback) => {
  const element = document.getElementById('elem');
  const image = document.createElement('img');
  image.src = url;
  image.style.maxWidth = '100%';
  element.appendChild(image);

  setTimeout(() => {
    callback(image.complete);
  }, 100);
};

const imageStatus = (status) => {
  if (status) {
    alert('image succesfully loaded');
  } else {
    alert('image failed to load');
  };
};

const img = 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const url = prompt('please enter an image url', img);
loadImage(url, imageStatus);
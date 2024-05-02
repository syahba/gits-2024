// Javascript Callback and Promise Practice

// Ubahlah fungsi loadImage dari soal sebelumnya agar menggunakan Promise.
const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    const element = document.getElementById('elem');
    const image = document.createElement('img');

    image.onload = () => resolve(image);
    image.onerror = (err) => reject(err);

    image.src = url;
    image.style.maxWidth = '100%';
    element.appendChild(image);
  });
};

const img = 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const url = prompt('please enter an image url', img);
loadImage(url)
  .then(() => alert('image succesfully loaded'))
  .catch(err => alert('image failed to load'));

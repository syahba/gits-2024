// Javascript Callback and Promise Practice

/* Buatlah fungsi fetchUserData yang akan menerima sebuah username dari GitHub dan sebuah callback 
function sebagai argumen. Fungsi ini akan melakukan HTTP GET request ke API GitHub
(https://api.github.com/users/[username]) dan memanggil callback dengan data yang diambil dari API. */

const fetchUserData = async (username, callback) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => callback(data))
    .catch(err => console.log(err));
};

const getData = (data) => {
  const obj = {
    name: data.name ? data.name : data.login,
    company: data.company ? data.company : '',
    blog: data.blog ? data.blog : '',
    location: data.location ? data.location : '',
    email: data.email ? data.email : '',
    hireable: data.hireable ? true : false,
    bio: data.bio ? data.bio : '',
    repos: data.public_repos,
    followers: data.followers,
    following: data.following
  };

  console.log(obj);
};

fetchUserData('syahba', getData);
// Javascript Callback and Promise Practice

/* Buatlah dua fungsi, fetchPosts dan fetchComments. Fungsi fetchPosts akan mengambil data posts 
dari https://jsonplaceholder.typicode.com/posts dan fetchComments akan mengambil data comments dari 
https://jsonplaceholder.typicode.com/comments. Lakukan chaining promise untuk mengambil data posts, 
kemudian comments, dan cetak jumlah masing-masing kekonsol. */
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts');
};

const fetchComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments');
};

fetchPosts()
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(posts => {
    fetchComments()
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(comments => {
        const obj = {
          totalPosts: posts.length,
          totalComments: comments.length
        };
        console.log(obj);
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
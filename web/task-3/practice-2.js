// Javascript Callback and Promise Practice

// Ubahlah fungsi fetchUserData dari soal sebelumnya agar menggunakan Promise.
const fetchUserData = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
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
    })
    .catch(err => console.log(err));
};

fetchUserData('syahba');
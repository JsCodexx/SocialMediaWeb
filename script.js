const userName = document.getElementById('username');
const password = document.getElementById('password');
const loginToAccount = document.getElementById('loginBtn');
const searchBtn = document.getElementById('searchBtn')
const searchText = document.getElementById('search');
const posts = document.getElementsByClassName('postTextArea')
const url = 'https://dummyjson.com/posts/user'
const settingDropDown = document.querySelector('.settingMenue')
var darkBtn = document.getElementById('darkBtn')

async function checkAuth(e) {
  e.preventDefault();
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

      username: `${userName.value}`,
      password: `${password.value}`,

    }),
  });
  const data = await res.json()
  localStorage.setItem('token', JSON.stringify(data.token));
  localStorage.setItem('email', JSON.stringify(data.email));
  console.log(data);
  console.log(userName.value, password.value)

  if (data.message != "Invalid credentials")
    window.location.href = "./index.html"

}

async function searchPosts(e) {
  e.preventDefault();
  let text = searchText.value
  const res = await fetch(`${url}/${text}`)
  const data = await res.json();
  posts[0].innerText = data.posts[0].body
  posts[1].innerText = data.posts[1].body
  posts[2].innerText = data.posts[2].body
  posts[3].innerText = data.posts[3].body
  posts[4].innerText = data.posts[4].body
  posts[5].innerText = data.posts[5].body
  console.log(data.posts[0].body)

}


searchBtn.addEventListener('click', searchPosts)


window.onload = async function (e) {
  e.preventDefault()
  const res = await fetch('https://dummyjson.com/posts?limit=10')
   const data = await res.json();
    console.log(data);
  console.log(data.posts[0].title)
  posts[0].innerText = data.posts[0].body
  posts[1].innerText = data.posts[1].body
  posts[2].innerText = data.posts[2].body
  posts[3].innerText = data.posts[3].body
  posts[4].innerText = data.posts[4].body
  posts[5].innerText = data.posts[5].body
}


loginToAccount.addEventListener('click', checkAuth)


// heroImage.innerHTML += `<img src="${json.image.url}" />`


// function to open the navigation bar

function openNavToggle() {
  settingDropDown.classList.toggle('settingMenueHeight');
}


darkBtn.onclick = function () {
  darkBtn.classList.toggle("darkBtnOn");
  document.body.classList.toggle('dark-theme')
  if (localStorage.getItem('them') == 'light') {
    localStorage.setItem('theme', 'dark');
  }
  else {
    localStorage.setItem('theme', 'light');
  }
}
if (localStorage.getItem('them') == 'light') {
  darkBtn.classList.remove('darkBtnOn');
  document.body.classList.remove('dark-theme')

}
else if (localStorage.getItem('them') == 'dark') {
  darkBtn.classList.add('darkBtnOn');
  document.body.classList.add('dark-theme')
}
else {
  localStorage.setItem('theme', 'light');
}
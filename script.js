
const searchBtn = document.getElementById('searchBtn')
const searchText = document.getElementById('search');
const posts = document.getElementsByClassName('postTextArea')
const url = 'https://dummyjson.com/posts/user'
const settingDropDown = document.querySelector('.settingMenue')
var darkBtn = document.getElementById('darkBtn')
let feeds = document.getElementById('feeds')
const loadButton = document.querySelector('#loadButton')



/****************************************Search post function**************************************************/

async function searchPosts(e) {
  e.preventDefault();
  feeds.innerHTML = ''
  let text = searchText.value
  const res = await fetch(`https://dummyjson.com/posts/search?q=${text}`)
  const data = await res.json();
  console.log(data)
  for (let i = 0; i < data.posts.length; i++) {
    // posts[i].innerText = data.posts[i].body
    feeds.innerHTML += `<div class="postRow">
    <div class="userProfile">
        <img src="./images/profile-pic.jpg" alt="">
        <div>
            <p>Mian Nomi</p>

            <span>November 21-2022,4:00 Am </span>
        </div>
    </div>
    <a href="#"><i class="fas fa-ellipsis-v"></i></a>
</div>
<h3>${data.posts[i].title}</h1>
<p class="postTextArea"> ${data.posts[i].body}</p>
<img src="./images/feed3.jpg" class="postImage" alt="">
<div class="postRow">
    <div class="activity">
        <div><img src="./images/like-blue.png" alt="">${data.posts[i].reactions}</div>
        <div><img src="./images/comments.png" alt="">400</div>
        <div><img src="./images/share.png" alt="">200</div>
    </div>
    <div class="profileIcon">
        <img src="./images/profile-pic.jpg" alt=""><i class="fas fa-caret-down"></i>
    </div>
</div>`
  }


}
searchBtn.addEventListener('click', searchPosts)


window.onload = async function (e) {
  e.preventDefault()
  const res = await fetch('https://dummyjson.com/posts')
  const data = await res.json();
  console.log(data);
  for (let i = 1; i < 10; i++) {
    feeds.innerHTML += `<div class="postRow">
    <div class="userProfile">
        <img src="./images/profile-pic.jpg" alt="">
        <div>
            <p>Mian Nomi</p>

            <span>November 21-2022,4:00 Am </span>
        </div>
    </div>
    <a href="#"><i class="fas fa-ellipsis-v"></i></a>
</div>
<h3>${data.posts[i].title}</h1>
<p class="postTextArea"> ${data.posts[i].body}</p>
<img src="./images/feed3.jpg" class="postImage" alt="">
<div class="postRow">
    <div class="activity">
        <div><img src="./images/like-blue.png" alt="">${data.posts[i].reactions}</div>
        <div><img src="./images/comments.png" alt="">400</div>
        <div><img src="./images/share.png" alt="">200</div>
    </div>
    <div class="profileIcon">
        <img src="./images/profile-pic.jpg" alt=""><i class="fas fa-caret-down"></i>
    </div>
</div>`

  }

}


//****************************************to load more posts on the scroll *************************************




async function loadMorePosts(e) {
  // e.preventDefault();
  // feeds.innerHTML =+ ''
  let text = searchText.value
  const res = await fetch(`https://dummyjson.com/posts`)
  const data = await res.json();
  console.log(data)
  for (let i = 10; i < 20; i++) {
    // posts[i].innerText = data.posts[i].body
    feeds.innerHTML += `<div class="postRow">
    <div class="userProfile">
        <img src="./images/profile-pic.jpg" alt="">
        <div>
            <p>Mian Nomi</p>

            <span>November 21-2022,4:00 Am </span>
        </div>
    </div>
    <a href="#"><i class="fas fa-ellipsis-v"></i></a>
</div>
<h3>${data.posts[i].title}</h1>
<p class="postTextArea"> ${data.posts[i].body}</p>
<img src="./images/feed3.jpg" class="postImage" alt="">
<div class="postRow">
    <div class="activity">
        <div><img src="./images/like-blue.png" alt="">${data.posts[i].reactions}</div>
        <div><img src="./images/comments.png" alt="">400</div>

        <div><img src="./images/share.png" alt="">200</div>
        <p class="postTextArea"> ${data.posts[i].body}</p>
    </div>
    <div class="profileIcon">
        <img src="./images/profile-pic.jpg" alt=""><i class="fas fa-caret-down"></i>
    </div>
</div>`
  }

}






/************************************on Scroll function*********************************************************/



window.onscroll = function (ev) {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 20) {
    // alert("you're at the bottom of the page");
    loadMorePosts()
  }
};
loadButton.addEventListener('click', loadMorePosts)

// function to open the navigation bar

// darkBtn.onclick = function () {
//   darkBtn.classList.toggle("darkBtnOn");
//   document.body.classList.toggle('dark-theme')
//   if (localStorage.getItem('them') == 'light') {
//     localStorage.setItem('theme', 'dark');
//   }
//   else {
//     localStorage.setItem('theme', 'light');
//   }
// }
// if (localStorage.getItem('them') == 'light') {
//   darkBtn.classList.remove('darkBtnOn');
//   document.body.classList.remove('dark-theme')

// }
// else if (localStorage.getItem('them') == 'dark') {
//   darkBtn.classList.add('darkBtnOn');
//   document.body.classList.add('dark-theme')
// }
// else {
//   localStorage.setItem('theme', 'light');
// }










// window.onscroll = function(ev) {
//   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       // you're at the bottom of the page
//       alert("you're at the bottom of the page");

//   }
// };




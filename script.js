
const searchBtn = document.getElementById('searchBtn')
const searchText = document.getElementById('search');
const posts = document.getElementsByClassName('postTextArea')
const url = 'https://dummyjson.com/posts/user'
const settingDropDown = document.querySelector('.settingMenue')
var darkBtn = document.getElementById('darkBtn')
let feeds = document.getElementById('feeds')
const loadButton = document.querySelector('#loadButton')
const logoutButton = document.querySelector('#logout')


/****************************************Search post function**************************************************/


async function searchPosts() {
    //   e.preventDefault();
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

</div>`
    }

}

/********************************************On Load Function*************************************************/

window.onload = async function (e) {
    e.preventDefault()
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json();
    console.log(data);
    for (let i = 1; i < 10; i++) {

        feeds.innerHTML += `<div class="postRow">
        <div class="userProfile">
            <img src="/images/Twitter-NFT-profile.jpg" alt="">
            <div>
                <p>Mian Nomi</p>

                <span>November 21-2022,4:00 Am </span>
            </div>
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
                <div class="msg-all-cont">
                    <ul class="reset-c">
                        <li id="i-s-" class="t-h">
                            <div id="icon-h" class="reset-c">

                            
                        </li>
                        <li id="-is-" class="t-h">
                            <div id="msg-h" class="reset-c">
                                <p id="msg-head" class="reset-c"></p>
                                <p id="msg-txt" class="reset-c"><b class="ccs"> </b></p>
                            </div>
                        </li>
                        <li class="t-h">
                            <div id="other-h" class="reset-c">
                            </div>
                        </li>
                    </ul>
                </div>

            </div>`
        const beta = await fetch(`https://dummyjson.com/comments/post/${i}`)
        let comment = await beta.json();
        const postRow = document.querySelectorAll('.ccs')
        for (let j = 0; j < comment.comments.length; j++) {
            const commentsDiv = document.createElement("div");
            commentsDiv.classList.add('comments')
            postRow.forEach((postRow) => {
                commentsDiv.innerHTML = `<i class = "fas fa-user fa-user-s"></i>${comment.comments[j].body}`;
                postRow.appendChild(commentsDiv)

            })



        }
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
    
    <div class="msg-all-cont">
    <ul class="reset-c">
        <li id="i-s-" class="t-h">
            <div id="icon-h" class="reset-c">

            
        </li>
        <li id="-is-" class="t-h">
            <div id="msg-h" class="reset-c">
                <p id="msg-head" class="reset-c"></p>
                <p id="msg-txt" class="reset-c"><b class="ccs"> </b></p>
            </div>
        </li>
        <li class="t-h">
            <div id="other-h" class="reset-c">
            </div>
        </li>
    </ul>
      </div>
       </div>`


        const beta = await fetch(`https://dummyjson.com/comments/post/${i}`)
        let comment = await beta.json();
        const postRow = document.querySelectorAll('.ccs')
        for (let k = 0; k < comment.comments.length; k++) {
            const commentsDiv = document.createElement("div");
            commentsDiv.classList.add('comments')
            postRow.forEach((postRow) => {
                commentsDiv.innerHTML = `<i class = "fas fa-user fa-user-s"></i>${comment.comments[k].body}`;
                postRow.appendChild(commentsDiv)

            })



        }
    }

}


/* **************************************logout function***************************************************  */


function logoutSession() {

    window.location.replace("./login.html")
}


/************************************on Scroll function*********************************************************/


window.onscroll = function (ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 20) {
        // alert("you're at the bottom of the page");
        loadMorePosts()
    }
};


/************************************* Calling Area **************************************************************8 */


searchBtn.addEventListener('click', searchPosts)

loadButton.addEventListener('click', loadMorePosts)

function openNavToggle() {
    settingDropDown.classList.toggle('settingMenueHeight')
}

logoutButton.addEventListener('click', logoutSession)





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

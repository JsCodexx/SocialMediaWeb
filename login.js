const loginToAccount = document.getElementById('loginBtn');
const userName = document.getElementById('username');
const password = document.getElementById('password');

/**************************************************Checking Authorization ************************************************************/
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

loginToAccount.addEventListener('click', checkAuth)
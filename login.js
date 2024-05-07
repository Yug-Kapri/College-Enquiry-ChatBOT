const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const loginForm = document.querySelector("#login-form");
const sigupForm = document.querySelector("#signup-form");

const errorMessage = document.querySelector(".error-message");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(loginForm).entries())

    console.log(formData)

    await loginUser(formData)
})

sigupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(sigupForm).entries())

    console.log(formData)

    await registerUser(formData)
})

async function loginUser(data) {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
  
      if (response.success) {
        alert("User Logged in successfully");
        window.localStorage.setItem("accessToken", response.data.accessToken);
        window.location.href = "/home.html";
      } else {
        console.log(response.message)
        errorMessage.style.display = "block"
        errorMessage.classList.add("shaking")
        errorMessage.innerHTML = response.message;

        setTimeout(() => {
            errorMessage.classList.remove("shaking")
        }, 1000)
      }
    } catch (error) {
      console.error(error);
    }
}



async function registerUser(data) {
    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
  
      if (response.success) {
        alert("User signed up successfully");
        window.location.href = "/";
      } else {
        console.log(response.message)
        errorMessage.style.display = "block"
        errorMessage.classList.add("shaking")
        errorMessage.innerHTML = response.message;

        setTimeout(() => {
            errorMessage.classList.remove("shaking")
        }, 1000)
      }
    } catch (error) {
      console.error(error);
    }
}


registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});
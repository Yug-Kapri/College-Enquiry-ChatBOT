const isLogin = Boolean(localStorage.getItem("accessToken"));

console.log(isLogin)

if (!isLogin) {
    window.location.href = "/"
}
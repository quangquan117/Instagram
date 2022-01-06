document.addEventListener("DOMContentLoaded", e => {
    console.log("here\n");
    let success, login, acompte;
    success = document.querySelector(".success");
    acompte = document.querySelector(".acompte");
    login = localStorage.getItem("login");
    success.textContent = `Bienvenue ${login}`;
    acompte.textContent = `votre compte est \n ${login}`;
})
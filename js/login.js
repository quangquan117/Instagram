document.addEventListener("DOMContentLoaded", e => {
    console.log("here\n");
    let email, warning, mdp, submit, success;
    submit = document.getElementsByTagName("input")[2];

    localStorage.setItem("login", "playgame@gmail.com");
    localStorage.setItem("mdp", "Play 200 games");
    let login = () => {
        warning = document.querySelector(".warning");
        email = document.getElementsByTagName("input")[0].value;
        mdp = document.getElementsByTagName("input")[1].value;

        if (email == localStorage.getItem("login") && mdp == localStorage.getItem("mdp")) {
            document.location.assign("accueil.html");
        } else {
            warning.style.display = "block";
            warning.textContent = "Mail ou mot de passe incorrecte";
        }
    };
    submit.addEventListener("click", event => {
        event.preventDefault();
        login();
    });
})
/*Login */
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("loggedIn","true");
        window.location.href = "index.html";
    }else{
        document.getElementById("error").innerText = "Invalid login details";l
    }
    }

    /*CHECK LOGIN*/
    function checklogin(){
    if (localStorage.getItem("loggedIn") !=="true"){
        window.location.href = "login.html";
 } else {
    loadPage("home");
}
    }
/* LOGOUT */
function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";

}
/* DYNAMIC CONTENT */
let content = document.getElementById("content");

function loadPage(page) {
    removeActive();
    document.getElementById(page).classList.add("action")
     if (page === "home") {
        changeBackground("home-bg");
        content.innerHTML = `
             <h2>Home</h2>
             <img src="project image.jpg" class="section-img">
             <p>Welcome to the website.</p>
        `;
    }

    if (page === "about") {
        changeBackground("about-bg");
        content.innerHTML = `
             <h2>About</h2>
             <img src="projectH.jpg" class="section-img">
             <p>Frontend project using HTML, CSS, and JavaScript.</p>
        `;
    }
}
    function removeActive() {
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
}

function changeBackground(className) {
    document.body.className = className;
}
function loadpage(page) {
    loadPage(page);
}

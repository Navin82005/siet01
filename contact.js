document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

let menuBtn = document.getElementById("menu-btn");
let menuClose = document.getElementById('menu-close');
let navigation = document.getElementById('navingright');

menuBtn.addEventListener('click', () => {
    navigation.style.right = "0";
});

menuClose.onclick = () => {
    navigation.style.right = "-220px";
}

window.addEventListener('load', () => {
    (document.querySelector(".loader")).style.display = "none";
});
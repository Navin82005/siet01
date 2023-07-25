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

let video = document.querySelector('video');
let cursor = document.querySelector('.self-cursor');
let body = document.querySelector('body');

video.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.innerText = 'Watch';
    body.style.cursor = 'none';
    cursor.style.visibility = 'visible';
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    // video.style.transform = 'scale(1.01)';

    video.addEventListener('mouseleave', () => {
        cursor.style.visibility = 'hidden';
        body.style.cursor = 'default';
        video.style.transform = 'scale(1)';
    });
});
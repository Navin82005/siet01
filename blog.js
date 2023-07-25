let cursor = document.querySelector('.self-cursor');
let body = document.querySelector('body');
let video = document.getElementById('backVideo');

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


let h2 = document.getElementById('homeH2');
h2.addEventListener('mouseenter', () => {
    video.style.filter = 'brightness(1)';
});
h2.addEventListener('mouseleave', () => {
    video.style.filter = 'brightness(0.5)';
});

h2.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.innerText = 'Pause';
    body.style.cursor = 'none';
    cursor.style.visibility = 'visible';
    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';

    h2.addEventListener('mouseleave', () => {
        cursor.style.visibility = 'hidden';
        body.style.cursor = 'default';
    });
});

h2.addEventListener('mousedown', () => {
    video.pause();
    cursor.innerText = 'Play';
});

h2.addEventListener('mouseup', () => {
    video.play();
    cursor.innerText = 'Pause';
});

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




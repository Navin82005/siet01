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

// let courseImageDiv = document.querySelectorAll('#why .why-box .details div');
let courseImage = Array.from(document.querySelectorAll('#why .why-box .details div img'));
let cursor = document.querySelector('.self-cursor');

courseImage.map((img) => {
    img.addEventListener('mousemove', (e) => {

        let x = e.clientX;
        let y = e.clientY;

        cursor.style.transition = 'none';
        cursor.style.visibility = 'visible';
        cursor.innerText = 'View';
        img.style.cursor = 'none';
        cursor.style.top = y + 'px';
        cursor.style.left = x + 'px';

    
        img.addEventListener('mouseleave', () => {
            cursor.style.visibility = 'hidden';
            img.style.cursor = 'default';
        });
    });
});


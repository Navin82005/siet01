(document.querySelectorAll("a[href^='#']")).forEach(anchor => {
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

// Event Count Down //
let eDays = document.getElementById('days');
let eHours = document.getElementById('hours');
let eMinutes = document.getElementById('mins');
let eSeconds = document.getElementById('secs');

let countDown = new Date("Mar 31, 2024 00:00:00").getTime();
var x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (60 * 1000));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));
    
    if (days < 10) eDays.textContent = "0" + days;
    else eDays.textContent = days;
    
    if (hours < 10) eHours.textContent = "0" + hours;
    else eHours.textContent = hours;
    
    if (minutes < 10) eMinutes.textContent = "0" + minutes;
    else eMinutes.textContent = minutes;

    if (seconds < 10) eSeconds.textContent = "0" + seconds;
    else eSeconds.textContent = seconds;

}, 1000);


// Event Post //
function eventPost() {
    var data = new FormData();
    
    data.append("name", document.getElementById("eName").value);
    data.append("email", document.getElementById("eEmail").value);
    data.append("number", document.getElementById("ePno").value);

    var xml = new XMLHttpRequest();
    xml.open("POST", "eventRegister.php");
    xml.onload = () => {
        let mgs = xml.response;
            mgs = mgs.split(',');
        if (mgs[0] != "Registered Successfully!") {
            let popup = document.getElementById('eventPupupError');
                popup.style.visibility = 'visible';
                popup.style.transform = 'scale(1) translate(-50%, -50%)';
        } else {
            Email.send({
                SecureToken : "f23ffc9a-95c0-4ca9-abfc-fc9d0f555b48",
                To : "narutouzumaki82005@gmail.com",
                From : "navin82005@gmail.com",
                Subject : "Kalam Participate no " + mgs[1],
                Body : "Name of the candidate: " + document.getElementById("eName").value + "; Email Id: " + document.getElementById("eEmail").value + "; Contact Number: " + document.getElementById("ePno").value + ';'
            }).then(message => {
                let popup = document.getElementById('eventPupup');
                popup.style.visibility = 'visible';
                popup.style.transform = 'scale(1) translate(-50%, -50%)';
            });
        }
    }
    
    xml.send(data);
    return false;
}

document.getElementById("eventPupupOK").onclick = () => {
    let popup = document.getElementById('eventPupup');
    popup.style.visibility = 'hidden';
    popup.style.transform = 'translate(-50%, -50%) scale(0.1)';
};

document.getElementById("eventPupupErrorOK").onclick = () => {
    let popup = document.getElementById('eventPupupError');
    popup.style.visibility = 'hidden';
    popup.style.transform = 'translate(-50%, -50%) scale(0.1)';
};







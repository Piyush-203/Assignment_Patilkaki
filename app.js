const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')


window.addEventListener('scroll', ()=> {
    if(this.scrollY >= 100){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener("click",() => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})
const form = document.getElementById('registration-form');
const closeButton = document.getElementById('close-button');

setTimeout(() => {
    form.classList.remove('hidden');
    form.classList.add('visible');
}, 15000);

closeButton.addEventListener('click', () => {
    form.classList.remove('visible');
    form.classList.add('hidden');
});

function countdown() {
    var minutesSpan = document.getElementById('minutes');
    var secondsSpan = document.getElementById('seconds');

    var minutes = parseInt(minutesSpan.textContent);
    var seconds = parseInt(secondsSpan.textContent);

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }
    console.log(minutes)
    console.log(seconds)

    minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
}

var timer = setInterval(countdown, 1000);
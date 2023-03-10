document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function reveal(){
        const reveals = document.querySelectorAll('.reveal');
        for ( let i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 100;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    });
    const timer = document.getElementById("timer");
    const majorProjectTimer = document.getElementById("majorProjectTimer");
    const capstoneTimer = document.getElementById("capstoneTimer");
    function getChrono(){
        const now = new Date().getTime();
        const countdownDate = new Date('April 28, 2023').getTime();
        const distanceBase = countdownDate - now;
        const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase %(1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60))
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distanceBase % (1000 * 60)) /1000);
        console.log(days, hours, minutes, seconds);
        timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    function countDown(){
        const now = new Date().getTime();
        const countdownDate = new Date('March 25, 2023').getTime();
        const distanceBase = countdownDate - now;
        const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase %(1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60))
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distanceBase % (1000 * 60)) /1000);
        console.log(days, hours, minutes, seconds);
        majorProjectTimer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    function countDownCap(){
        const now = new Date().getTime();
        const countdownDate = new Date('April 28, 2023').getTime();
        const distanceBase = countdownDate - now;
        const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase %(1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60))
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distanceBase % (1000 * 60)) /1000);
        console.log(days, hours, minutes, seconds);
        capstoneTimer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    const countdownInterval = setInterval(() => {
        getChrono();
        countDown();
        countDownCap();
    }, 1000);











    });


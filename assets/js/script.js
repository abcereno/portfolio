document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function reveal(){
        const reveals = document.querySelectorAll('.reveal');
        for ( let i = 0; i < reveals.length; i++){
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    });
    let timerInterval;
    const timer = document.getElementById("timer");
    const majorProjectTimer = document.getElementById("majorProjectTimer");
    const capstoneTimer = document.getElementById("capstoneTimer");
    const miniproject = 'April 27, 2023';
    const majorproject = 'March 28, 2023';
    const capstone = 'April 22, 2023';
    function getChrono(){
        const now = new Date().getTime();
        const countdownDate = new Date(`${miniproject}`).getTime();
        const distanceBase = countdownDate - now;
        const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase %(1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60))
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distanceBase % (1000 * 60)) /1000);
        console.log(days, hours, minutes, seconds);
        if(distanceBase <= 0){
            timer.innerText = "Graduated KodeGo Bootcamp";
        }else{
            timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }
    function countDown(){
        const now = new Date().getTime();
        const countdownDate = new Date(`${majorproject}`).getTime();
        const distanceBase = countdownDate - now;
        const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase %(1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60))
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distanceBase % (1000 * 60)) /1000);
        console.log(days, hours, minutes, seconds);
        if(distanceBase <= 0){
            majorProjectTimer.innerText = "Completed";
        }else{
            majorProjectTimer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }


    function countDownCap(){
        const now = new Date().getTime();
        const countdownDate = new Date(`${capstone}`).getTime();
        const distanceBase = countdownDate - now;
        const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase %(1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60))
        const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distanceBase % (1000 * 60)) /1000);
        console.log(days, hours, minutes, seconds);
        if(distanceBase <= 0){
            clearInterval(timerInterval);
            capstoneTimer.innerText = "Completed";
        }else{
            capstoneTimer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }
    
    timerInterval = setInterval(() => {
        getChrono();
        countDown();
        countDownCap();
    }, 1000);
    });


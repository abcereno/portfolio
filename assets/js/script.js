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






















    });


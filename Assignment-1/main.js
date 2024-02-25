document.addEventListener("DOMContentLoaded", function() {
    animateSkills();
});

function animateSkills() {
    var progressBars = document.querySelectorAll('.progress');

    progressBars.forEach(function(progress) {
        var percentage = progress.getAttribute('data-percent');
        progress.style.width = percentage + '%';
        progress.classList.add('animate');
    });
}
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

gsap.to(".first", 1.5, {delay: .5, top: "-100%", ease: Expo.easeInOut});
gsap.to(".second", 1.5, {delay: .7, top: "-100%", ease: Expo.easeInOut});
gsap.to(".third", 1.5, {delay: .9, top: "-100%", ease: Expo.easeInOut});


gsap.from('.home__information', {opacity: 0, duration: 3, delay: 2.3, y: 50})
gsap.from('.about_me', {opacity: 0, duration: 5, delay: 5, y: 50})
gsap.from('.project_des', {opacity: 0, duration: 3, delay: 4, y: 50})

gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 2.3, y: 25, ease:'expo.out', stagger: .3})

// NAV ITEM
gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 3.2, y: 25, ease:'expo.out', stagger: .2})

// SOCIAL
gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 7, y: 25, ease:'expo.out', stagger: .2})



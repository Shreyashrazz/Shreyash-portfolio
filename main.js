// toggle//navbar////
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav1');

menuicon.onclick = () =>{
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

///scroll section active////
let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let hieight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hieight){
            navlink.forEach.apply(link => {
                link.classlist.remove('active');
                document.querySelector('header nav a [herf*=' + id +']').classList.add('active');
            });
        };
    });
//////////sticky navbar/////
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/////remove toggle icon and navbar/////////
menuicon.classList.remove('fa-xmark');
navbar.classList.remove('active');


};

//scroll reveal/////////
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });
 ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img , .service-container, .portfolio-box,.contact form', { origin: 'buttom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p,.about-content', { origin: 'right' });


 const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web designer','Youtuber'],
    typeSpeed: 70,
    backspeed: 70,
    backdelay: 1000,
    loop:true,
  });
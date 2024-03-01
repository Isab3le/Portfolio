let menuIcon = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a'); 

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight; 
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('.navbar a[href="#' + id + '"]').classList.add('active');
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  menuIcon.classList.toggle('active');
  navbar.classList.toggle('active');
};

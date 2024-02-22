let menuIcon = document.querySelector('#menu-icon'); // Corrigido para selecionar pelo ID
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a'); // Corrigido para selecionar os links dentro da barra de navegação

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight; // Corrigido para obter a altura da seção
    let id = sec.getAttribute('id'); // Adicionado para obter o ID da seção

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
  navbar.classList.toggle('active'); // Adicionado para alternar a classe ativa na barra de navegação
};

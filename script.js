let openMenu = document.querySelector('.menu>i');
let closeMenu = document.querySelector('.close-menu>i');
let menu = document.querySelector('ul');

openMenu.addEventListener('click', ()=>{
    menu.style.right = '0';
    openMenu.style.display = 'none';
});
closeMenu.addEventListener('click', ()=>{
    menu.style.right = '-200px';
    openMenu.style.display = 'block';
});


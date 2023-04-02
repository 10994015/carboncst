const header = document.getElementById('header');
const navigation = document.getElementById('navigation');
const menuBar = document.getElementById('menuBar');
const menuClose = document.getElementById('menuClose');
let isNavOpen = false;
menuBar.addEventListener('click', ()=>{
    navigation.classList.add('open')
})
menuClose.addEventListener('click', ()=>{
    navigation.classList.remove('open')
})
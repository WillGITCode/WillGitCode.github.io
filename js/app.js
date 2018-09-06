let menuButton = document.getElementsByClassName('menu-btn')
let mobileMenu = document.getElementsByClassName('mobile-menu')
let clickedButton = function(){
  mobileMenu[0].classList.toggle('active')
}


menuButton[0].addEventListener('click', clickedButton)


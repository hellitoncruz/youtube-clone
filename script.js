var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var container = document.querySelector(".container")

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}

// "toggle" serve para mostrar ou esconder algo no javascript, tipo o menu pra aparecer e esconder
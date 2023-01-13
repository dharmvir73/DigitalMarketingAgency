'use strict';

/**
 * navbar variables
 */

const menuToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

const navbar = document.querySelector("[data-navbar]")

/**
 * element toggle function
 */

const elemToggleFunction = function (elem) {
    elem.classList.toggle("active")
}

menuToggleBtn.addEventListener("click", function () { elemToggleFunction(navbar) } )


/**
 * element go to top function
 */

const goTopBtn = document.querySelector("[data-go-top]")


window.addEventListener("scroll", function () {
    if(window.scrollY > 800)
    {
        goTopBtn.classList.add("active")
    }else{
        goTopBtn.classList.remove("active")
    }
})  
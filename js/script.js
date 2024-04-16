'use strict';

// const inkElem = null;
const addEventOn = (elem, type, callback)=>{
    if(elem.length > 1){
        for(let i = 0; i<elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }else{
        elem.addEventListener(type, callback);
    }
}

const navbar = document.querySelector("[navbar]");
const navbarToggle = document.querySelectorAll("[nav-toggle]");
const navlinks = document.querySelectorAll("[nav-link]");


const navToggle = ()=>{
    navbar.classList.toggle("active");
}

addEventOn(navbarToggle, "click", navToggle);

addEventOn(navlinks, "click", navToggle);



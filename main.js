'use-strict';

const addEventOnElem= function(elem,type,callback){
    if(elem.length>1){
        for(let i=0;i<elem.length;i++){
            elem[i].addEventListener(type,callback);
        }
    }
    else{
        elem.addEventListener(type,callback);
    }
}

const navbar=document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");
const navLinks=document.querySelectorAll("[data-nav-link]");
const overlay=document.querySelector("[data-overlay]");

const toggleNavbar = ()=>{
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}

addEventOnElem(navToggle,"click",toggleNavbar);

const closeNavbar = () =>{
    navbar.classList.remove('active');
    overlay.classList.remove('active');
}

addEventOnElem(navLinks,"click",closeNavbar);

const header= document.querySelector("[data-header]");

const activeElem=()=>{
    if(window.scrollY>100){
        header.classList.add('active');
    }
    else{
        header.classList.remove('active');
    }
}

addEventOnElem(window,"scroll",activeElem);
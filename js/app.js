$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });
    
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    const ul = document.getElementById('ul')
    
    hamberger.addEventListener('click', function(){
      mobileNav.classList.add('open');
      ul.style.display = "flex";  
    });
    
    mobileNav.addEventListener('click', function(){
        mobileNav.classList.remove('open'); 
        ul.style.display = "none";
    });

    
    });
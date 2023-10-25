

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



    
    let firstLine = document.getElementById('line1');
    let secondLine = document.getElementById('line2');
    let headLine = document.getElementById('headline');
    let meineArbeit = document.getElementById('meine-arbeit');
    let lines = document.getElementById('lines');
    var windowWidth = window.innerWidth;
    console.log(windowWidth)

    if( windowWidth >= 1400) {
        newMarginleft = -5;
    } else if (windowWidth < 1400 && windowWidth > 1100) {
        newMarginleft = -(1500 - windowWidth)/100 * 6;
    } else if (windowWidth <= 1200 && windowWidth > 1100) {
        newMarginleft = -(1500 - windowWidth)/100 * 5.5;
    } else if (windowWidth <= 1100 && windowWidth > 900) {
        newMarginleft = -(1500 - windowWidth)/100 * 2.8;
    } else if (windowWidth <= 900 && windowWidth>700) {
        newMarginleft = -(1500 - windowWidth)/100 * 4;
    } else if (windowWidth <= 700 && windowWidth > 500) {
        newMarginleft = -(1500 - windowWidth)/100 * 5;
    } else {
        newMarginleft = 0;
    };
    
    lines.style.marginLeft = `${newMarginleft}vw`;

    
    window.onscroll = () => {
    var scrollIndex = window.scrollY - 500;
    
    
    firstLine.style.left = `${scrollIndex}px`;
    secondLine.style.right = `${scrollIndex}px`;
    stopScroll = 300;

    if (scrollIndex >= stopScroll) {
        firstLine.style.left = stopScroll + 'px';
        secondLine.style.right = stopScroll + 'px';
        secondLine.style.color = "white";
        headLine.style.background = "#b16b51";
        lines.style.background = "#b16b51";

        setTimeout(() => {
            meineArbeit.style.opacity = 1;
        }, 500);

    } else {
        headLine.style.background = "#F2F2F2";
        lines.style.background = "#F2F2F2";
        secondLine.style.color = "black";
    }
};

var handyLines = document.getElementById('lines-handy');
var aboutVanessa = document.getElementById('about');
var selfDiscovery = document.getElementById('self-discovery');

if (windowWidth<780) {
    window.onscroll = () => {
        var handyScroll = window.scrollY; 
        console.log(handyScroll);
        if (handyScroll > 540) {
            aboutVanessa.style.background = "#b16b51";
            handyLines.style.background= "#b16b51";
            headLine.style.background = "#b16b51";
            setTimeout(() => {
                meineArbeit.style.opacity = 1;
            }, 500);
            
        }
        else {
            aboutVanessa.style.background = "#F2F2F2";
            handyLines.style.background= "#F2F2F2";
            headLine.style.background = "#F2F2F2";
        }
       
    };
};





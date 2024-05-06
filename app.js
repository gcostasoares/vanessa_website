const leistungButtons = document.querySelectorAll('.leistung-button');
const leistungContent = document.querySelector('.leistung-info-content');
const leistungCard = document.querySelectorAll('.leistung-card');
const leistungInfo = document.querySelectorAll('.leistungen_info');

//const leistungBackground = ['#e5dbe2', '#ede1d7', '#f6e8cc'];

let leistungIsOpened = false;
let z = 0;

leistungButtons.forEach((button, i) => {
  //leistungCard[i].style.backgroundColor = leistungBackground[i];

  button.addEventListener('click', () => {
    if (leistungIsOpened) {
      leistungInfo[z].classList.remove('activated');
    }
    
    //leistungContent.style.backgroundColor = leistungBackground[i];
    leistungInfo[i].classList.add("activated");
    const leistungInfoRect = leistungInfo[i].getBoundingClientRect();

    window.scrollTo({
      top: window.pageYOffset + leistungInfoRect.top,
      behavior: 'smooth'
    });

    z = i;
    leistungIsOpened = true;
  });
});



const backToLeistungen = document.querySelectorAll('.back-to-leistungen');

backToLeistungen.forEach(button => {
  button.addEventListener('click', () => {
    const leistungCardTop = document.querySelector('.leistung-card').getBoundingClientRect();
    window.scrollTo({
      top: window.pageYOffset + leistungCardTop.top-100,
      behavior: 'smooth'
    });
  });
});





const header = document.querySelector('.header');
let lastScrollTop = 0;
let scrolled = false;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {

        header.classList.remove('fixed');
        if (!scrolled) {
            header.style.visibility = 'hidden';
        }
    } else if (scrollTop < lastScrollTop && !scrolled) {
     
        header.classList.add('fixed');
        header.style.visibility = 'visible';
    }

    if (scrollTop === 0) {
     
        scrolled = false;
    }

    lastScrollTop = scrollTop;
});



const burgerElement = document.querySelector('.burger');
const navElement = document.querySelector('.overlayer'); 
const navContainer = document.querySelector('.burger__nav__container');

const burgerDescendants = burgerElement.querySelectorAll('.burger *');

burgerElement.addEventListener('click', function() {
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true'; 
  burgerElement.setAttribute('aria-expanded', !isExpanded);
  navElement.style.left = isExpanded ? '100vw' : '0';
  burgerDescendants.forEach(descendant => {
    descendant.style.backgroundColor = isExpanded ? '#b16b51' : 'white';
  });
});

navContainer.addEventListener('click', function() {
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true'; 
  burgerElement.setAttribute('aria-expanded', !isExpanded);
  navElement.style.left = isExpanded ? '100vw' : '0';
  burgerDescendants.forEach(descendant => {
    descendant.style.backgroundColor = isExpanded ? '#b16b51' : 'white';
});
});

const backgroundText = document.querySelector('.background-text');

window.addEventListener('scroll', function() {
    var scrollRatio = 0.5;
    const scrollFactor = (window.scrollY*scrollRatio) + 'px'; 
    backgroundText.style.setProperty('--scrollFactor', scrollFactor);

});


const form = document.getElementById('kontakt');
const username = document.getElementById('username');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

let nameValidation = false;
let emailValidation = false;
let messageValidation = false;

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Not a valid name');
  } else {
    setSuccessFor(username);
    nameValidation = true;
  }

  if (emailValue === '') {
    setErrorFor(email, 'Not a valid e-mail');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
    emailValidation = true;
  }


  if (nameValidation && emailValidation && messageValidation) {
    sendEmail();
  }
}


function sendEmail() {
  emailjs.init("lLIUww44rBc7Ofile");
  var name = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('text').value;
  var messageSuccess = document.getElementById('success');
  var messageError = document.getElementById('error');

  emailjs.send("service_ywhozg1", "template_enmente", {
    from_name: name,
    from_email: email,
    message_textarea: message
  }).then(
    function(response) {
      console.log("Email sent successfully:", response);
      kontakt.style.display = 'none';
      messageSuccess.style.display = 'flex';
    },
    function(error) {
      console.log("Email failed to send:", error);
      messageError.style.display = 'flex';
    }
  );
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
  messageValidation = true;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/.test(email);
}














/* import { handleFormSubmission } from './elements/form.js';
import { initializeHeaderAndNavigation } from './elements/header.js';
import { movingText } from "./elements/movingText.js";
import { handleScroll, handleBurgerMenu, handleTextSize, handleAnimation } from './elements/perpectiveText.js';

handleScroll();
handleBurgerMenu();
handleTextSize();
handleAnimation();


movingText();
initializeHeaderAndNavigation();
handleFormSubmission(); */


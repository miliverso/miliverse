const menuButton = document.querySelector(".menu-button");
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".navbar-list");
const lineOne = document.querySelector("#line-1");
const lineTwo = document.querySelector("#line-2");
const lineThree = document.querySelector("#line-3");
const heroBrightness = document.querySelector(".hero");
const aboutBrightness = document.querySelector(".about-me");
const projectsBrightness = document.querySelector(".projects");
const contactBrightness = document.querySelector(".contact");
const aboutParagraph = document.querySelector(".about-paragraph p");
const aboutParagraphContainer = document.querySelector(".about-paragraph")
const makeItHappen = document.querySelector(".make-it-happen");
const aboutAnimation = document.querySelector(".about-animation");
const contactTextContainer = document.querySelector(".contact-text");
const contactTitle = document.querySelector(".contact-text h3");
const contactParagraph = document.querySelector(".contact-text p");
const contactButton = document.querySelector(".contact-text a")
const contactAnimation = document.querySelector(".contact-animation");
const projectsContainer = document.querySelector(".projects-container");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
const elements = document.querySelector(".projects-container li")
const shakingHands = document.querySelector("#shaking-hands");
const leftHand = document.querySelector("#left-hand");
const rightHand = document.querySelector("#right-hand")

//-------------------------click event-------------------------//
arrowRight.addEventListener("click", moveRight);
arrowLeft.addEventListener("click", moveLeft);
menuButton.addEventListener("click", toggleMobileMenu);

//-------------------------reload website when document has been resized -------------------------//
// window.onresize = () => location.reload();

//-------------------------display menu-------------------------//
function toggleMobileMenu() {
    menuIcon.classList.toggle("menu-icon");
    menuIcon.classList.toggle("menu-active-x");
    lineOne.classList.toggle("line-1");
    lineTwo.classList.toggle("line-2");
    lineThree.classList.toggle("line-3");
    navList.classList.toggle("navbar-list-active");
    heroBrightness.classList.toggle("brightness-active")
    aboutBrightness.classList.toggle("brightness-active");
    projectsBrightness.classList.toggle("brightness-active");
    contactBrightness.classList.toggle("brightness-active");
}

//-------------------------display make it happen letters and text-------------------------//
function displayAboutText() {
    aboutParagraph.classList.add("text-animation")
}
function getMakeItHappenLetters() {
    fetch("assets/mobile/animation/make-it-happen/make-it-happen.svg").then(data => data.text()).then(data =>{
        makeItHappen.innerHTML = `${data}`;
    })
}
//-------------------------creating an observer to display about animation-------------------------//
function createObserver() {
    let options = {
        threshold: 0.7,
    }

    const observer = new IntersectionObserver(aboutAnimationObserver, options);
    observer.observe(aboutAnimation);
    const observer1 = new IntersectionObserver(contactAnimationObserver, options);
    observer1.observe(contactAnimation);
    const observer2 = new IntersectionObserver(aboutTextObserver, options);
    observer2.observe(aboutParagraphContainer);
    const observer3 = new IntersectionObserver(contactTextObserver, options);
    observer3.observe(contactTextContainer);
}
function aboutAnimationObserver(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            getMakeItHappenLetters();
            displayAboutText();
            observer.unobserve(aboutAnimation);
        }
    })
}
function contactAnimationObserver(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            showContactAnimation();
            displayContactText();
            observer.unobserve(contactAnimation);
        }
    })
}
function aboutTextObserver(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            displayAboutText();
            observer.unobserve(contactAnimation);
        }
    })
}
function contactTextObserver(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            displayContactText();
            observer.unobserve(contactAnimation);
        }
    })
}

createObserver()

//-------------------------carousel-------------------------//
function moveRight() {
    let currentLeft = parseFloat(getComputedStyle(projectsContainer, null).left);
    let elementWidth = parseFloat(getComputedStyle(elements, null).width);
    let gap = 20;
    elementWidth = elementWidth + gap;

    if (currentLeft > -1) {
        arrowLeft.classList.add("arrow-fade-in")
        arrowLeft.classList.remove("arrow-fade-out")
        arrowLeft.disabled = false;
     }

    currentLeft = -currentLeft + elementWidth;
    projectsContainer.style.left = `-${currentLeft}px`;

    if (currentLeft > elementWidth && currentLeft < elementWidth * 2) {
        projectsContainer.style.left = `-${elementWidth * 2}px`;
       }

    if (currentLeft > elementWidth) {
       arrowRight.classList.add("arrow-fade-out");
       arrowRight.classList.remove("arrow-fade-in")
       arrowRight.disabled = true;
    }
}
function moveLeft() {
    let currentLeft = parseFloat(getComputedStyle(projectsContainer, null).left);
    let elementWidth = parseFloat(getComputedStyle(elements, null).width);
    let gap = 20;
    elementWidth = elementWidth + gap
   
    currentLeft = -currentLeft - elementWidth;
    projectsContainer.style.left = `-${currentLeft}px`;

    if (currentLeft < elementWidth) {
        projectsContainer.style.left = "0px";
        arrowLeft.classList.add("arrow-fade-out");
        arrowLeft.classList.remove("arrow-fade-in")
        arrowLeft.disabled = true;
    }
    if (currentLeft < elementWidth * 2) {
        console.log("works")
        arrowRight.classList.add("arrow-fade-in");
        arrowRight.classList.remove("arrow-fade-out")
        arrowRight.disabled = false;
        
     }
    if (currentLeft === 0) {
        console.log("works 0")
        arrowLeft.classList.add("arrow-fade-out");
        arrowLeft.classList.remove("arrow-fade-in")
        arrowLeft.disabled = true;
        arrowRight.classList.add("arrow-fade-in");
        arrowRight.classList.remove("arrow-fade-out")
        arrowRight.disabled = false;
     }

}
//-------------------------display contact animation and text-------------------------//
function displayContactText() {
    contactTitle.classList.add("text-animation");
    contactParagraph.classList.add("text-animation");
    contactButton.classList.add("button-animation");
}
function showContactAnimation() {
    shakingHands.classList.add("shaking-hands");
    leftHand.classList.add("left-hand");
    rightHand.classList.add("right-hand");
   
}
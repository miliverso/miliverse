const miliverseLogo = document.querySelector(".miliverse-logo");
//-------------------------display enter button after few seconds-------------------------//
setTimeout(() => {
    document.querySelector(".logo-animation-button").style.display = "block";
}, 3700);

//-------------------------display miliverse logo animation background-------------------------//
function getMiliverseLogo() {
    fetch("assets/mobile/animation/logo/mobile-background-logo.svg").then(data => data.text()).then(data => {
        miliverseLogo.innerHTML = `${data}`;
    })
}
getMiliverseLogo();
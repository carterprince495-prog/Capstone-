// MOBILE NAVIGATION

const menuButton =
    document.querySelector(".menu-button");

const navMenu =
    document.querySelector("#nav-menu");


if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        const isOpen =
            navMenu.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

}


// HOME PAGE JAVASCRIPT INTERACTION

const helloButton =
    document.querySelector("#hello-button");

const helloMessage =
    document.querySelector("#hello-message");


if (helloButton && helloMessage) {

    helloButton.addEventListener("click", function () {

        helloMessage.textContent =
            "Hello! Thanks for visiting Robert Joseph Carter's portfolio.";

    });

}


// PROJECT PAGE JAVASCRIPT INTERACTION

const tipButton =
    document.querySelector("#tip-button");

const tipMessage =
    document.querySelector("#tip-message");


if (tipButton && tipMessage) {

    tipButton.addEventListener("click", function () {

        tipMessage.textContent =
            "Portfolio tip: keep your strongest work easy to find and explain what you learned from each project.";

    });

}
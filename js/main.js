const navbar = document.getElementById("header");
const menuLinks = document.getElementsByClassName("menu_link");
const socialMediaIcons = document.getElementsByClassName("social-media__icons");
const logo = document.getElementById("logo");
const responsiveMenu = document.getElementById("menu_responsive");
const menu = document.getElementsByClassName("header__menu");
const menuItems = document.getElementsByClassName("menu__item");
const menuIcon = document.getElementsByClassName("menu__responsive");

window.onscroll = () => {
  let verticalScroll = window.scrollY;
  if (verticalScroll >= 900) {
    // switch nabvar to purple
    navbar.classList.replace("header--white", "header--purple");
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.add("menu_link--green");
    }
    for (let i = 0; i < socialMediaIcons.length; i++) {
      socialMediaIcons[i].classList.add("social-media__icons--green");
    }
    logo.src = "images/logo-hops-alternative.png";
  } else {
    // switch nabvar to white
    navbar.classList.replace("header--purple", "header--white");
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.remove("menu_link--green");
    }
    for (let i = 0; i < socialMediaIcons.length; i++) {
      socialMediaIcons[i].classList.remove("social-media__icons--green");
    }
    logo.src = "images/logo-hops.png";
  }
};

const addYearToWeb = () => {
  const year = document.getElementById("year");
  const getCurrentYear = new Date().getFullYear();
  year.innerHTML = getCurrentYear;
};

addYearToWeb();

responsiveMenu.addEventListener("click", () => {
  if (responsiveMenu.className == "menu_responsive--show") {
    // ocultar
    const menu = document.getElementsByClassName("header__menu--show");
    const menuItems = document.getElementsByClassName("menu__item--show");
    const menuLinks = document.getElementsByClassName("menu_link--show");
    menu[0].classList.add("header__menu");
    menu[0].classList.remove("header__menu--show");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("menu__item--show");
      menuLinks[i].classList.remove("menu_link--show");
    }

    responsiveMenu.classList.remove("menu_responsive--show");
    menuIcon[0].src = "images/menu.svg";
  } else {
    // mostrar
    menu[0].classList.add("header__menu--show");
    menu[0].classList.remove("header__menu");
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add("menu__item--show");
      menuLinks[i].classList.add("menu_link--show");
    }
    responsiveMenu.classList.add("menu_responsive--show");
    menuIcon[0].src = "images/x.svg";
  }
});

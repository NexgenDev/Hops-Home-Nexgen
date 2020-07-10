window.onscroll = () => {
    let verticalScroll = window.scrollY
    const navbar = document.getElementById('header')
    const menuItems = document.getElementsByClassName('menu_link')
    const socialMediaIcons = document.getElementsByClassName('social-media__icons')
    const logo = document.getElementById('logo')
    if (verticalScroll >= 900) {
        // switch nabvar to purple
        navbar.classList.replace('header--white', 'header--purple')
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.add('menu_link--green')
        }
        for (let i = 0; i < socialMediaIcons.length; i++) {
            socialMediaIcons[i].classList.add('social-media__icons--green')
        }
        logo.src='images/logo-hops-alternative.png'
        
    } else {
        // switch nabvar to white
        navbar.classList.replace('header--purple', 'header--white')
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('menu_link--green')
        }
        for (let i = 0; i < socialMediaIcons.length; i++) {
            socialMediaIcons[i].classList.remove('social-media__icons--green')
        }
        logo.src='images/logo-hops.png'
    }
}


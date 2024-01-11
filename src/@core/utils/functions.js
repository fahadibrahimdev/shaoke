export function scrollToSection (id) {
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start'});
    }
}

export function toggleNavShadow (route) {
    const navbar = document.querySelector('nav');
    const navbarLogo = document.querySelector('nav .brand-logo');
    if (window.scrollY > 75) {
        if (['HomeView'].includes(route)) {
            navbar.classList.add('shadow-nav', 'bg-white', '!text-primary', '!py-3.5');
            navbarLogo.classList.add('brightness-0');
        } else {
            navbar.classList.add('shadow-nav', '!py-3.5');
        }
    } else {
        if (['HomeView'].includes(route)) {
            navbar.classList.remove('shadow-nav', 'bg-white', '!text-primary', '!py-3.5');
            navbarLogo.classList.remove('brightness-0');
        } else {
            navbar.classList.remove('shadow-nav', '!py-3.5');
        }
    }
}

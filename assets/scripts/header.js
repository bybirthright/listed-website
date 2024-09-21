const header = document.getElementById('header');
const scrollToTopBtn = document.getElementById('scrollToTop');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 150) {
        header.classList.add('visible');
    } else if (scrollTop < lastScrollTop || scrollTop <= 150) {
        header.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
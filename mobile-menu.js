
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navLinks_a = navLinks.querySelectorAll('a');
    

    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileMenuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    navLinks_a.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && navLinks.classList.contains('open')) {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mangoToggle = document.getElementById('mango-toggle');
    const mainNav = document.getElementById('main-nav');

    if (mangoToggle && mainNav) {
        mangoToggle.addEventListener('click', () => {
            // This behavior is only for mobile view
            if (window.innerWidth < 768) {
                // Do not do anything if it's already active
                if (mainNav.classList.contains('is-active')) {
                    return;
                }
                
                mainNav.classList.add('is-active');

                // Set a timer to automatically close the menu
                setTimeout(() => {
                    mainNav.classList.remove('is-active');
                }, 4000); // 4 seconds
            }
        });
    }
});
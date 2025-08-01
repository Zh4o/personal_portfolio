document.addEventListener('DOMContentLoaded', () => {
    const mangoControl = document.getElementById('mango-nav-control');
    const mainNav = document.getElementById('main-nav');

    if (mangoControl && mainNav) {
        mangoControl.addEventListener('click', (event) => {
            if (window.innerWidth >= 768) {
                return;
            }

            // Check if the menu is already open.
            if (mainNav.classList.contains('is-active')) {
                // If menu is open, this is the "second tap".
                // We do nothing here, allowing the link's default
                // navigation to the homepage to proceed.
                return;
            } else {
                // If menu is closed, this is the "first tap".
                
                // 1. Prevent the link from navigating to the homepage.
                event.preventDefault();

                // 2. Open the menu by adding the 'is-active' class.
                // The mango will slide over and stay there.
                mainNav.classList.add('is-active');

                setTimeout(() => {
                    mainNav.classList.remove('is-active');
                }, 4000); // 4 seconds
            }
        });
    }

    // --- Accordion Logic for Projects Page ---
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        item.addEventListener('click', event => {
            // IMPORTANT: If the click is on the 'Visit Website' button, do nothing.
            // This allows the link to work normally without triggering the accordion.
            if (event.target.closest('.project-visit-btn')) {
                return;
            }

            // Check if the clicked item is already open
            const isOpen = item.classList.contains('is-open');

            // Optional: Close all other open items for a cleaner accordion experience
            projectItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');
            });

            // If the item was not already open, open it.
            // This prevents the item from re-opening immediately after being closed.
            if (!isOpen) {
                item.classList.add('is-open');
            }
        });
    });

});
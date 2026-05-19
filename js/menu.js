function initializeMenu() {
    const menuToggle = document.querySelector('#menu-toggle');
    const menu = document.querySelector('#menu');
    
    if (menuToggle && menu) {
        alert('Menu initialized');
        menuToggle.addEventListener('click', function() {
            alert('Toggle clicked');
            this.classList.toggle('open');
            menu.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
                menu.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        });
    } else {
        alert('Menu elements not found');
    }
}



document.addEventListener('DOMContentLoaded', initializeMenu);
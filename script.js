document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.querySelector('.appointment-form');
    const thankYouMessage = document.querySelector('.thank-you-message');

    if (appointmentForm && thankYouMessage) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real application, you would send this data to a server
            // For now, we'll just show the thank you message
            appointmentForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            
            // Optionally, you might want to reset the form after a delay or some other action
            // setTimeout(() => {
            //     appointmentForm.reset();
            //     appointmentForm.style.display = 'flex';
            //     thankYouMessage.style.display = 'none';
            // }, 5000); // Hide message and show form again after 5 seconds
        });
    }

    // --- Smooth Scrolling for Navigation (Optional) ---
    // If you add IDs to your sections (e.g., <section id="services">), you can enable smooth scrolling.
    // const navLinks = document.querySelectorAll('.main-nav a');
    // navLinks.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href').substring(1);
    //         const targetElement = document.getElementById(targetId);
    //         if (targetElement) {
    //             window.scrollTo({
    //                 top: targetElement.offsetTop - document.querySelector('.main-header').offsetHeight,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    const emailLink = document.getElementById('email-link');

    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            // Simple check for common mobile device indicators
            const isMobile = /Mobi|Android/i.test(navigator.userAgent);

            if (!isMobile) {
                e.preventDefault(); // Prevent mailto: on PC
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=book@rinsereflect.com', '_blank');
            }
            // On mobile, let the default mailto: behavior proceed
        });
    }
});


// Basic script to show alert on contact form submit
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thanks for contacting us! We'll get back to you soon.");
            contactForm.reset();
        });
    }
});
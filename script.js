// JavaScript for form validation
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
            const name = form.elements.name.value.trim();
            const email = form.elements.email.value.trim();
            const subject = form.elements.subject.value.trim();
            const message = form.elements.message.value.trim();

            if (!name || !email || !subject || !message) {
                event.preventDefault();
                alert('
// script.js

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if (!name || !email || !message) {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Please fill in all fields.';
    return;
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Enter a valid email address.';
    return;
  }

  formMsg.style.color = 'green';
  formMsg.textContent = 'Message sent successfully!';
  this.reset();
});

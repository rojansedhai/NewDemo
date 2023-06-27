// JavaScript code for the website

// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add submit event listener to the form
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Log the form data to the console
  console.log('

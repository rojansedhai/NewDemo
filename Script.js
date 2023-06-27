// JavaScript code for the website

//This is a demo javascript code

// Function to display a greeting message
function displayGreeting() {
  const name = prompt("Enter your name:");
  const greeting = document.getElementById('greeting');
  greeting.textContent = "Hello, " + name + "! Welcome to our website.";
}

// Call the displayGreeting function when the page loads
window.addEventListener('load', displayGreeting);

// Display current day and date in the banner
window.onload = function() {
  const dateElement = document.getElementById("dateDisplay");
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', options);
};

Create script.js to display current date

// Display current day and date in banner
const dateDisplay = document.getElementById("dateDisplay");
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateDisplay.textContent = now.toLocaleDateString(undefined, options);

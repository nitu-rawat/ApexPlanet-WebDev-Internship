// Selecting Dynamic Elements
const actionBtn = document.getElementById('actionBtn');
const clickCountDisplay = document.getElementById('clickCount');
const resetCountBtn = document.getElementById('resetCountBtn');

// Initialize counting variable from local storage or set to zero
let totalClicks = parseInt(localStorage.getItem('capstoneClicks')) || 0;

// Update the user interface on page initialization
clickCountDisplay.textContent = totalClicks;

// Function to handle global tracking counters
function trackUserClick() {
    totalClicks++;
    clickCountDisplay.textContent = totalClicks;
    localStorage.setItem('capstoneClicks', totalClicks); // Push state to browser persistence memory
}

// Attach Event Listeners to actions
actionBtn.addEventListener('click', function(event) {
    trackUserClick();
    alert("Success: Capstone project module executed safely!");
});

// Reset logic to wipe local storage logs
resetCountBtn.addEventListener('click', function() {
    totalClicks = 0;
    clickCountDisplay.textContent = totalClicks;
    localStorage.setItem('capstoneClicks', totalClicks);
    alert("Analytics counter has been reset successfully.");
});
// Selecting HTML elements
const fetchBtn = document.getElementById('fetchBtn');
const jokeSetup = document.getElementById('jokeSetup');
const jokePunchline = document.getElementById('jokePunchline');

// Function to fetch data from Public API
async function fetchLiveJoke() {
    // Changing text to loading state in English
    jokeSetup.textContent = "Loading new joke from server...";
    jokePunchline.textContent = "";

    try {
        // Calling a free public official joke API
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        
        // Checking if server responded correctly
        if (!response.ok) {
            throw new Error("Server error, failed to load data.");
        }

        // Converting raw data into JSON format
        const data = await response.json();

        // Updating the HTML screen with live data in English
        jokeSetup.textContent = data.setup;
        jokePunchline.textContent = `▶ ${data.punchline}`;

    } catch (error) {
        // Handling errors if internet is down or api fails
        jokeSetup.textContent = "Oops! Error loading data.";
        jokePunchline.textContent = "Please check your internet connection and try again.";
        console.error("API Fetch Error:", error);
    }
}

// Adding click event listener to the button
fetchBtn.addEventListener('click', fetchLiveJoke);
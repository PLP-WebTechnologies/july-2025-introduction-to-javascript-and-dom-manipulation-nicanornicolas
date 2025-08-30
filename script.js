// Wait for the entire HTML document to be loaded and parsed before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // 🌐 Select all the necessary elements from the page at the beginning.
    // =================================================================
    const startButton = document.getElementById('startButton');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const dynamicList = document.getElementById('dynamicList');
    const themeButton = document.getElementById('themeButton');
    const toggleButton = document.getElementById('toggleButton');
    const secretContent = document.getElementById('secretContent');

    // =================================================================
    //  JavaScript Functions 
    // =================================================================

    /**
     * Creates a personalized greeting message.
     * @param {string} name - The user's name.
     * @param {number} age - The user's age.
     * @returns {string} - The formatted welcome message.
     */
    function createGreeting(name, age) {
        // A simple check to handle empty names
        const validName = name ? name : "friend";
        return `Hello, ${validName}! It's great to know you are ${age} years old.`;
    }

    /**
     * Calculates the approximate year of birth.
     * @param {number} age - The user's age.
     * @returns {number} - The calculated year of birth.
     */
    function calculateYearOfBirth(age) {
        const currentYear = new Date().getFullYear();
        return currentYear - age;
    }


    // =================================================================
    // 🔁JavaScript Loops 
    // =================================================================

    // Using forEach to populate a list from an array.
    function populateFunFacts() {
        const facts = [
            "JavaScript was created in just 10 days.",
            "It is the most popular programming language in the world.",
            "It has nothing to do with Java, despite the name."
        ];
        
        facts.forEach(fact => {
            const listItem = document.createElement('li');
            listItem.textContent = fact;
            dynamicList.appendChild(listItem);
        });
        console.log("Part 3: forEach loop completed and list populated.");
    }

    // Using a 'for' loop for a simple countdown in the console.
    function startCountdown() {
        console.log("Part 3: 'for' loop countdown starting...");
        for (let i = 5; i > 0; i--) {
            console.log(`T-minus ${i}...`);
        }
        console.log("Blast off! 🚀");
    }


    // =================================================================
    // 🌐DOM (Event Listeners & Manipulation)
    // =================================================================

    // --- Interaction 1: The main start button ---
    startButton.addEventListener('click', () => {
        // --- Part 1: Mastering JavaScript Basics ---
        // Variable declarations and user input
        const userName = prompt("What is your name?");
        let userAge = parseInt(prompt("How old are you?"));

        // Conditional logic (if/else)
        if (isNaN(userAge) || userAge <= 0) {
            console.log("Invalid age entered, setting to a default value.");
            userAge = 25; // Default age if input is invalid
            alert("Invalid age! We'll assume you're 25.");
        } else if (userAge < 18) {
            console.log("User is a minor.");
        } else {
            console.log("User is an adult.");
        }

        // Use a function from Part 2 to get a result
        const greeting = createGreeting(userName, userAge);
        
        // DOM Manipulation: Change the content of the welcome message
        welcomeMessage.textContent = greeting;
    });

    // --- Interaction 2: Theme switcher button ---
    themeButton.addEventListener('click', () => {
        // DOM Manipulation: Toggle a class on the body element
        document.body.classList.toggle('dark-mode');

        // Update button text based on the current theme
        if (document.body.classList.contains('dark-mode')) {
            themeButton.textContent = "Switch to Light Mode";
        } else {
            themeButton.textContent = "Switch to Dark Mode";
        }
    });

    // --- Interaction 3: Reveal secret content button ---
    toggleButton.addEventListener('click', () => {
        // DOM Manipulation: Toggle a class to show/hide an element
        secretContent.classList.toggle('hidden');
    });

    // --- Finally, call the loop functions to run them on page load ---
    populateFunFacts();
    startCountdown();
});
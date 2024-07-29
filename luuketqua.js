let results = [];

// Load results from localStorage when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const storedResults = localStorage.getItem('results');
    if (storedResults) {
        results = JSON.parse(storedResults);
        updateResultBar(); // Update the result bar with the loaded results
    }
});

function updateResultBar() {
    const resultBar = document.getElementById('resultBar');
    resultBar.innerHTML = '';

    results.forEach(r => {
        const dot = document.createElement('div');
        dot.className = `result-dot ${r}`;
        resultBar.appendChild(dot);
    });

    // Save results to localStorage
    localStorage.setItem('results', JSON.stringify(results));
}

function addResult(result) {
    if (results.length >= 14) {
        results.shift(); // Remove the oldest result
    }
    results.push(result);
    updateResultBar();
}

// Example function to place a bet and update results
function placeBet(type) {
    let result = ''; // This would be determined by your game logic
    if (type === 'tai') {
        result = 'tai';
    } else if (type === 'xiu') {
        result = 'xiu';
    }

    addResult(result);

    // Other game logic...
}

// Function to set bet amount (you might already have this function)
function setBetAmount(game, amount) {
    const inputId = game === 'TaiXiu' ? 'betAmountTaiXiu' : 'betAmountChanLe';
    const input = document.getElementById(inputId);
    
    if (amount === 'all') {
        // Example logic to set 'all in' amount
        input.value = 1000; // Replace with actual logic
    } else {
        input.value = amount;
    }
}

// You would call placeBet() function based on your game logic

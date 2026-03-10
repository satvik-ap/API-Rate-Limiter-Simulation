/*
    API Rate Limiter Simulation
    --------------------------------
    This script demonstrates a reusable throttle function
    that limits function execution to N calls per second.
*/

// DOM Elements
const apiButton = document.getElementById("apiButton");
const rateInput = document.getElementById("rateLimit");
const applyButton = document.getElementById("applyLimit");
const allowedDisplay = document.getElementById("allowedCount");
const blockedDisplay = document.getElementById("blockedCount");
const logList = document.getElementById("logList");

// Counters
let allowedCount = 0;
let blockedCount = 0;

// ================================
// 1️⃣ Reusable Throttle Function
// ================================
/*
    throttle(fn, limit)

    This function controls how many times a target function (fn)
    can execute within a 1-second time window.

    Parameters:
    - fn: The original function to be controlled
    - limit: Maximum number of executions allowed per second

    Logic:
    - Track number of calls in current time window
    - Reset counter after 1 second
    - Allow execution if within limit
    - Block execution if limit exceeded
*/
function throttle(fn, limit) {

    // callCount stores number of executions in current 1-second window
    let callCount = 0;

    // windowStart stores the starting timestamp of the current window
    let windowStart = Date.now();

    // Return a wrapped function (Higher-Order Function)
    return function (...args) {

        // Get current time
        const currentTime = Date.now();

        // If 1 second has passed, reset window and counter
        if (currentTime - windowStart >= 1000) {
            windowStart = currentTime; // Start new window
            callCount = 0;             // Reset counter
        }

        // If call count is within limit, execute original function
        if (callCount < limit) {
            callCount++;               // Increase count
            fn.apply(this, args);      // Call original function
        } else {
            // If limit exceeded, block execution
            blockedCount++;
            blockedDisplay.textContent = blockedCount;
            log(`❌ Blocked at ${new Date().toLocaleTimeString()}`);
        }
    };
}

// ================================
// 2️⃣ Simulated API Function
// ================================
function fakeApiCall() {
    allowedCount++;
    allowedDisplay.textContent = allowedCount;
    log(`✅ Allowed at ${new Date().toLocaleTimeString()}`);
}

// Initial throttled version
let throttledApiCall = throttle(fakeApiCall, parseInt(rateInput.value));

// ================================
// 3️⃣ Apply New Rate Limit
// ================================
applyButton.addEventListener("click", () => {
    const newLimit = parseInt(rateInput.value);

    if (newLimit > 0) {
        throttledApiCall = throttle(fakeApiCall, newLimit);

        // Reset counts for clean demo
        allowedCount = 0;
        blockedCount = 0;
        allowedDisplay.textContent = 0;
        blockedDisplay.textContent = 0;
        logList.innerHTML = "";

        log(`🔄 Rate limit updated to ${newLimit} calls/sec`);
    }
});

// ================================
// 4️⃣ Button Click Simulation
// ================================
apiButton.addEventListener("click", () => {
    throttledApiCall();
});

// ================================
// 5️⃣ Logging Function
// ================================
function log(message) {
    const li = document.createElement("li");
    li.textContent = message;
    logList.prepend(li);
}
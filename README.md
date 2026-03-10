# API Rate Limiter Simulation (JavaScript Throttling)

## Project Description
This project demonstrates an **API Rate Limiter Simulation** built using HTML, CSS, and JavaScript.  
It implements a **throttling mechanism** that restricts how many times a function can execute within a specific time interval.

The system simulates real-world **API rate limiting**, where only a limited number of requests are allowed per second while excessive requests are blocked.

This project also demonstrates important JavaScript concepts such as **closures, higher-order functions, and timing logic**.

---

## Features
- Adjustable **rate limit (calls per second)**
- Reusable **throttle function implementation**
- Real-time display of **allowed vs blocked API calls**
- **Execution log with timestamps**
- Dynamic DOM updates without page reload
- Demonstrates **closure-based state management**

---

## Technologies Used
- **HTML** – Structure of the application
- **CSS** – Styling and layout
- **JavaScript (ES6)** – Core logic implementation

### JavaScript Concepts Used
- Throttling
- Closures
- Higher-order functions
- Event listeners
- DOM manipulation
- Timing control using `Date.now()`

---

## How the Simulation Works
1. The user sets a **rate limit** (calls per second).
2. The user clicks **Simulate API Call**.
3. The throttle function checks the number of calls within the current **time window**.
4. If the number of calls is within the limit, the call is **allowed**.
5. If the limit is exceeded, the call is **blocked**.
6. The system updates the **counters and logs the result with a timestamp**.

---

## Project Structure
API-Rate-Limiter-Simulation
│
├── index.html # User Interface
├── style.css # Styling
├── script.js # Throttling logic and API simulation
└── README.md # Project documentation


---

## Example Output
The application shows:

- Allowed API calls counter
- Blocked API calls counter
- Call execution log with timestamps
- Dynamic updates when the rate limit changes

---

## Learning Outcomes
This project helped demonstrate:

- How **API rate limiting works**
- Implementing **function throttling**
- Using **JavaScript closures for state persistence**
- Managing **execution timing**
- Building an interactive **frontend simulation**

---

## References
- Mozilla Developer Network (MDN) – JavaScript Closures  
- MDN Web Docs – Higher-Order Functions  
- MDN Web Docs – `Date.now()` Method  
- JavaScript ES6 Documentation  
- REST API Rate Limiting Concepts in Web Development

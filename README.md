#API Rate Limiter Simulation (JavaScript Throttling)
Project Description

This project demonstrates an API Rate Limiter Simulation using JavaScript. It implements a throttling mechanism that restricts how many times a function can execute within a specific time interval. The system simulates real-world API rate limiting by allowing only a limited number of calls per second while blocking excessive requests.

The project also demonstrates important JavaScript concepts such as closures, higher-order functions, and timing logic.

Features

Adjustable API rate limit (calls per second)

Throttle function implementation

Real-time display of allowed and blocked calls

Execution log with timestamps

Dynamic DOM updates without page reload

Demonstrates closure-based state management

Technologies Used

HTML

CSS

JavaScript (ES6)

Concepts implemented:

Throttling

Closures

Higher-order functions

Event handling

DOM manipulation

How It Works

The user sets a rate limit (number of API calls allowed per second).

The user clicks the Simulate API Call button.

The throttle function checks how many calls were made within the current time window.

If the call limit is not exceeded, the call is allowed.

If the limit is exceeded, the call is blocked.

The system logs the result and updates the counters.

Project Structure
API-Rate-Limiter/
│
├── index.html     # User interface
├── style.css      # Styling
├── script.js      # Throttling logic and API simulation
└── README.md      # Project documentation
Example Output

The application displays:

Allowed API calls

Blocked API calls

Real-time execution logs

Dynamic counter updates

Learning Outcomes

Through this project, the following concepts were explored:

Function throttling

JavaScript closures

Timing control using Date.now()

Event-driven programming

Frontend simulation of API rate limiting

References

Mozilla Developer Network (MDN) – JavaScript Closures

MDN Web Docs – Higher-Order Functions

MDN Web Docs – Date.now() Method

JavaScript ES6 Documentation

REST API Rate Limiting Concepts

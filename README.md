# Playwright Automation Exercises

This project contains beginner-level automation test scenarios implemented using Playwright with TypeScript.

## Scenarios Covered

### 1. JavaScript Alert Handling
Automates the following actions on:
https://the-internet.herokuapp.com/javascript_alerts

#### Test Steps
- Navigate to JavaScript Alerts page
- Click on "Click for JS Alert" button
- Handle and accept JS Alert popup
- Validate alert message text
- Assert result message displayed after accepting alert
- Capture screenshot after execution

#### Assertions Used
- Validate page heading
- Validate alert message text
- Validate result message text
- Validate button visibility

#### Screenshot
- `session3-ex1-result.png`

---

### 2. Iframe Handling
Automates iframe validations on:
https://practice-automation.com/iframes/

#### Test Steps
- Navigate to iframe page
- Switch to iframe using `frameLocator()`
- Validate Playwright logo visibility
- Validate "Get started" button visibility
- Validate button link attribute

#### Assertions Used
- Validate iframe visibility
- Validate Playwright logo visibility
- Validate Get Started button visibility
- Validate href attribute value

---

## Technologies Used
- Playwright
- TypeScript
- Node.js

---

## Project Structure

```text
project-root/
│
├── tests/
│   ├── alerts.spec.ts
│   └── iframe.spec.ts
│
├── screenshots/
│
├── playwright.config.ts
├── package.json
└── README.md

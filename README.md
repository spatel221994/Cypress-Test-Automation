# Cypress Test Automation – QA Integration Test Environment

## Overview

This project contains end-to-end (E2E) automated tests developed using **Cypress** and **TypeScript** for the QA Integration Test Environment.

---

# Technology Stack

* Cypress 15.x
* TypeScript
* Node.js
* Visual Studio Code

# Test Scenarios Covered

## Login

* Verify login fails with invalid credentials.
* Verify error message is displayed.
* Verify successful login with valid credentials.

---

## Sidebar Visibility

* Verify sidebar is not displayed before login.
* Verify logout button is not displayed before login.
* Verify sidebar is displayed after successful login.
* Verify logout button is displayed after successful login.

---

## Transactions

* Verify Transactions page opens successfully.
* Verify transaction table is displayed.
* Verify pagination works correctly.
* Verify page number changes.
* Verify displayed transaction rows change between pages.

---

## Favourite Fruit

* Verify available fruit list is displayed.
* Move a fruit using the supported double-click interaction.
* Attempt native drag-and-drop interaction (if supported by the browser/application).
* Verify the favourite container updates.
* Verify the original container updates.

---

## Settings

* Enable/disable Brand Logo.
* Verify logo is displayed across application pages.
* Verify preference persists after page reload.

---

## Logout

* Verify logout returns the user to the login page.
* Verify protected navigation is no longer visible.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/spatel221994/Cypress-Test-Automation.git
```

Navigate to the project:

```bash
cd Cypress-Test-Automation
```

Install dependencies:

```bash
npm install
```

---

# Running the Tests

## Open Cypress Test Runner

```bash
npx cypress open
```

## Run All Tests (Headless)

```bash
npx cypress run
```

---

## Run a Specific Test File

Login tests:

```bash
npx cypress run --spec "cypress/e2e/Login.cy.ts"
```

Sidebar tests:

```bash
npx cypress run --spec "cypress/e2e/Sidebar.cy.ts"
```

Transactions tests:

```bash
npx cypress run --spec "cypress/e2e/Transactions.cy.ts"
```

Favourite Fruit tests:

```bash
npx cypress run --spec "cypress/e2e/FavouriteFruit.cy.ts"
```

Settings tests:

```bash
npx cypress run --spec "cypress/e2e/Settings.cy.ts"
```

Logout tests:

```bash
npx cypress run --spec "cypress/e2e/Logout.cy.ts"
```

---

# Useful Cypress Commands

Verify Cypress installation:

```bash
npx cypress verify
```

Clear Cypress cache:

```bash
npx cypress cache clear
```

Reinstall project dependencies:

```bash
rm -rf node_modules
npm install
```

Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
```

# Author

**Siddharth Patel**

GitHub: https://github.com/spatel221994

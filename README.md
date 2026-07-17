# Playwright API Automation Framework
# 🚀 Playwright API Automation Framework

A professional Playwright API automation framework built with **JavaScript** and **Playwright** for API testing using the **DummyJSON API**.

---

## 📖 Project Overview

This project demonstrates how to build a scalable API automation framework using Playwright with reusable utilities and industry-standard project structure.

---

## 🚀 Features

- API Automation with Playwright
- Login API Testing
- Users CRUD API Testing
- Reusable API Client
- Environment Configuration
- Smoke Tests
- Regression Tests
- Negative Tests
- GitHub Integration

---

## 🛠 Tech Stack

- Playwright
- JavaScript
- Node.js
- Git
- GitHub

---

## 📁 Project Structure

```text
playwright-api-automation
│
├── config
├── fixtures
├── logs
├── reports
├── schemas
├── tests
│   ├── auth
│   ├── users
│   ├── products
│   ├── carts
│   ├── posts
│   ├── todos
│   ├── negative
│   ├── smoke
│   └── regression
│
├── test-results
├── utils
├── .env
├── package.json
├── playwright.config.js
└── README.md
```

---

## ✅ Test Coverage

### Authentication

- Login with valid credentials
- Login with invalid credentials

### Users

- Get All Users
- Get Single User
- Create User
- Update User
- Patch User
- Delete User
- Search Users
- Filter Users

---

## 🧪 Test Data

The sample user used throughout the automation tests is:

| Field | Value |
|-------|-------|
| First Name | Stephen |
| Last Name | Aina |

---

## ▶️ Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run the Users module:

```bash
npx playwright test tests/users
```

Run a single test:

```bash
npx playwright test tests/users/getUsers.spec.js
```

Open the Playwright report:

```bash
npx playwright show-report
```

---

## 📈 Future Improvements

- GitHub Actions CI/CD
- JSON Schema Validation
- Data-Driven Testing
- API Request Logging
- Docker Support
- Allure Reports

---

## 👨‍💻 Author

**Stephen Aina**

Quality Assurance Engineer

---

⭐ Built with Playwright for learning, practice, and professional API automation.
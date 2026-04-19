# Tilak Web Pay - TWP

A full‑stack implementation of a payment-wallet‑style web application, inspired by Paytm.  
The project includes both frontend (user UI) and backend (API + database) — enabling user registration, authentication, balance management, and payment/transfer flows.

---

## 🔎 Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Repository Structure](#repository-structure)  
- [Setup & Installation](#setup--installation)  
  - [Prerequisites](#prerequisites)  
  - [Backend Setup](#backend-setup)  
  - [Frontend Setup](#frontend-setup)  
- [Usage](#usage)  
- [Environment Variables](#environment-variables)  
- [Future Improvements](#future-improvements)  
- [Contributing](#contributing)  
- [License](#license)

---

## 📝 Overview

This project aims to simulate a digital wallet / payment system similar to Paytm — letting users:

- Sign up / log in  
- View their current balance  
- Send money to other users  
- View transaction history / status  

It is a learning & demonstration project to show end-to-end integration: frontend UI, backend API, database transactions, and secure authentication.

---

## ✅ Features

- User Authentication (Signup / Login)  
- Secure Money Transfer between users  
- Balance update / management  
- Basic UI for wallet dashboard & transaction pages  
- RESTful API backend  
- Proper separation between client (frontend) and server (backend)  

---

## 🛠️ Tech Stack

- **Frontend:** React.js (or your chosen frontend framework), with HTML/CSS/JS  
- **Backend:** Node.js + Express.js (or similar) for API server  
- **Database:** MongoDB (or any other, depending on your implementation)  
- **Authentication:** JWT (JSON Web Token) or session-based auth  
- **HTTP client:** Axios / Fetch (frontend ↔ backend communication)  
- **Others:** Any additional libraries you have used (state management, validation, styles etc.)

> ⚠️ Adjust the exact frameworks/libraries based on what’s in your `frontend/` and `backend/` directories.

---

## 📂 Repository Structure
```
Paytm-end-to-end/
│
├── backend/
│   ├── middlewares/
│   ├── node_modules/
│   ├── routes/
│   │   ├── AccountRoute.js
│   │   ├── index.js
│   │   └── UserRoute.js
│   ├── utils/
│   │   └── jwt.js
│   ├── db.js
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
│
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── AppBar.jsx
    │   │   ├── Balance.jsx
    │   │   ├── BottomWarning.jsx
    │   │   ├── Button.jsx
    │   │   ├── Heading.jsx
    │   │   ├── InputBox.jsx
    │   │   ├── Subheading.jsx
    │   │   └── User.jsx
    │   ├── hooks/
    │   │   └── debounces.js
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── SendMoney.jsx
    │   │   ├── Signin.jsx
    │   │   ├── Signup.jsx
    │   │   └── SuccessTransfer.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── store/
    ├── .gitignore
    ├── index.css
    ├── index.html
    ├── package-lock.json
    ├──package.json
    ├── .gitignore
    ├── eslint.config.js
    ├── README.md
    └── vite.config.js

```

> This structure follows the common “frontend + backend” architecture for full‑stack apps. 

---

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v14 or above)  
- npm or yarn  
- MongoDB running locally or access to a MongoDB Atlas / remote MongoDB server  

### Backend Setup

```bash
cd backend
npm install  #install the depedencies
```
```bash
node index.js
```

### Frontend Setup

```bash
cd frontend
npm install           # or yarn install
npm run dev           # or `npm start` depending on your setup
```

Once both are running, open your browser and navigate to your frontend local URL (e.g. `http://localhost:3000`) to access the app.

---

## 🎯 Usage

1. Signup or login as a user.  
2. View your wallet balance and transaction history.  
3. Transfer money to another user by providing their credentials.  
4. Observe backend API calls and balance updates—demonstrating full‑stack transaction flow.

---

## 🔐 Environment Variables

In the backend (and frontend if any):

| Variable        | Description                           |
|-----------------|---------------------------------------|
| `MONGODB_URI`   | MongoDB connection string / URI       |
| `JWT_SECRET`    | Secret key used for JWT authentication |
| *(other vars)*  | e.g. port number, API keys, etc.      |

> Make sure to never commit real secrets to the repository.

---

## Preview
**Dashboard** <br />
<img width="1366" height="647" alt="image" src="https://github.com/user-attachments/assets/efb681e9-4a5e-463e-8514-f1f657074504" />

**Send Money Page**  <br />
<img width="707" height="536" alt="image" src="https://github.com/user-attachments/assets/f4e9f298-a149-4e3b-be2f-82057e07ac29" />

**Success Transfer** <br />
<img width="679" height="437" alt="image" src="https://github.com/user-attachments/assets/28b06926-fad4-41a1-a702-6b141e5ea1d4" />

**SignUp Page** <br/>
<img width="666" height="644" alt="image" src="https://github.com/user-attachments/assets/4c72f541-ef86-4beb-a25f-00cc3d1a0dd8" />

**SignIn Page** <br />
<img width="671" height="588" alt="image" src="https://github.com/user-attachments/assets/8d7314e2-4125-4a7d-ae06-88410f52ec65" />

---

## 🚧 Future Improvements / TODO

- Add transaction history with timestamps  
- Add password reset / user profile management  
- Add input validations & error handling  
- Improve UI / responsiveness  
- Add tests (unit / integration)  
- Add deployment configuration (e.g. Docker, CI/CD)  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or pull requests to add features, fix bugs, or improve documentation.

When contributing, please:

- Fork this repository  
- Create a new branch (e.g. `feature/new-feature`)  
- Commit your changes and submit a Pull Request  

---

## 📄 License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

---

## 🧑‍💻 Author / Maintainer

- **Username:** `Tilak-csd`  
- **GitHub:** https://github.com/Tilak-csd  
- **Email / Contact:** *(add if you wish to share)*

---

_Last updated: YYYY-MM-DD_


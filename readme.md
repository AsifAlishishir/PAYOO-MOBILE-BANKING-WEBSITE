
---

# Payooo - Digital Wallet Application

**Payooo** is a sleek, mobile-responsive digital wallet web application. It allows users to manage their finances through a clean interface, featuring functionalities like adding money, cashing out, transferring funds, and tracking transaction history.

---

## 🚀 Features

* **Secure Authentication**: A simple login system requiring a mobile number and a 4-digit PIN.
* **Real-time Balance Updates**: The available balance updates instantly whenever a transaction (Add Money, Cash Out, etc.) is performed.
* **Dynamic Dashboard**:
* **Add Money**: Top up your wallet from various banks (IFIC, Islamia, Asia Bank).
* **Cash Out**: Withdraw funds to agent accounts.
* **Transfer Money**: Send money to other users via their account numbers.
* **Pay Bill**: Pay utility or service bills directly from the app.
* **Get Bonus**: Apply coupon codes to earn bonuses.


* **Transaction History**: A dedicated section to track all your recent activities with timestamps.
* **Responsive UI**: Optimized for a mobile-first experience using Tailwind CSS and DaisyUI.

---

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3
* **Styling**: [Tailwind CSS v4](https://www.google.com/search?q=https://tailwindcss.com/), [DaisyUI v5](https://www.google.com/search?q=https://daisyui.com/)
* **Functionality**: Vanilla JavaScript (ES6)
* **Fonts**: Outfit (Google Fonts)
* **Icons**: Font Awesome 7.0

---

## 📁 Project Structure

```text
├── assets/             # Images and icons (wallet, send, bonus, etc.)
├── index.html          # Login Page (Landing)
├── home.html           # Main Dashboard
├── script.js           # Logic for Authentication
├── home.js             # Core logic for transactions and UI toggling
├── style.css           # Global styles and font configurations
└── payoo.png           # Project Logo

```

---

## ⚙️ How to Run Locally

1. **Clone the repository**:
```bash
git clone https://github.com/AsifAlishishir/PAYOO-MOBILE-BANKING-WEBSITE.git

```


2. **Navigate to the project folder**:
```bash
cd payooo-digital-wallet

```


3. **Open the project**:
* Simply double-click `index.html` to open it in your browser.
* *Optional*: Use the "Live Server" extension in VS Code for a better development experience.



---

## 🔐 Credentials for Testing

To log into the dashboard, use the following default credentials:

| Field | Value |
| --- | --- |
| **Mobile Number** | `1234567890` |
| **4-Digit PIN** | `1234` |

---

## 🧠 Logic Highlights

* **Data Persistence**: Current session transactions are stored in a `transactionData` array and rendered dynamically.
* **Input Validation**: The app checks for 11-digit account numbers and valid PINs before processing any transaction.
* **DOM Manipulation**: Uses a custom `setToggle` function to switch between different service sections without reloading the page.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
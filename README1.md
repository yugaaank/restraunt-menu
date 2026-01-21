# 🍽️ Restaurant Menu & Ordering System

This is a modern Angular-powered web application that provides a digital restaurant menu with filtering, cart management, and order tracking. The idea is simple: replace static paper menus with an interactive, browser-based experience that is easy to extend and maintain.

The project is built using Angular and TypeScript with a modular structure, making it suitable for learning, demos, and future expansion into a full-stack application.

---

## 🚀 Project Overview

The application allows users to:

* Browse a restaurant menu displayed dynamically in the UI
* Filter food items by category
* Add items to a cart and manage quantities
* View calculated totals in real time
* Follow a basic order flow that can later be connected to a backend

This project focuses mainly on the frontend architecture and state handling rather than backend persistence.

---

## 🧠 Tech Stack

* **Angular** – Main frontend framework
* **TypeScript** – Type-safe development
* **RxJS / Angular Signals** – Reactive data handling
* **HTML & CSS** – Layout and styling
* **Angular CLI** – Project scaffolding and build tooling

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── services/        # Shared services (menu, cart logic)
│   │   ├── models/          # TypeScript interfaces and data models
│   │   ├── data/            # Static or mock menu data
│   │   └── layout/          # Shared layout components
│   ├── features/
│   │   ├── menu/            # Menu display and filtering
│   │   ├── cart/            # Cart management UI
│   │   └── orders/          # Order-related components
```

* **core** contains reusable logic and shared components
* **features** contains isolated application features
* **services** handle business logic and state

---

## 📦 Prerequisites

Make sure the following are installed:

* Node.js (v18+ recommended)
* npm (v9+)
* Angular CLI (optional but recommended)

Check versions:

```bash
node -v
npm -v
ng version
```

---

## 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/yugaaank/restraunt-menu.git
cd restraunt-menu
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Application

Start the development server:

```bash
ng serve
```

Open your browser and navigate to:

```
http://localhost:4200/
```

The app will automatically reload when you modify source files.

---

## 📦 Build

To build the project for production:

```bash
ng build
```

The compiled output will be generated in the `dist/` directory.

---

## ✨ Features Summary

* Dynamic menu rendering
* Category-based filtering
* Cart add/remove functionality
* Real-time price calculation
* Responsive layout

---

## 📌 Best Practices Followed

* Modular Angular architecture
* Separation of concerns (UI vs logic)
* Type-safe interfaces
* Reusable services
* Reactive data flow

---

## 🔮 Possible Enhancements

* Backend integration for storing orders
* Authentication and user accounts
* Admin dashboard for menu management
* Database-driven menu instead of static data
* Payment gateway integration

---

## 📄 License

This project is open for educational and personal use. You are free to modify and extend it as needed.

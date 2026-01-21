# 🍽️ Restaurant Menu & Ordering System

A modern, high-performance web application built with **Angular** to provide a seamless digital dining experience. This application features a premium user interface, dynamic menu filtering, shopping cart management, and order history tracking.

---

## ✨ Key Features

- **� Modern UI/UX**:
  - **Glassmorphism Design**: Sleek, translucent card effects and blurred backdrops.
  - **Responsive Layout**: Fully optimized for desktops, tablets, and mobile devices.
  - **Dark Theme**: A polished dark mode for visual comfort.

- **📜 Dynamic Menu**:
  - **Smart Filtering**: Instantly filter items by categories (Appetizers, Main Course, Desserts, Beverages) using **Angular Signals**.
  - **Rich Visuals**: High-quality imagery for every menu item.
  - **Real-time Search**: (If implemented, or scalable for future).

- **🛒 Powerful Cart Management**:
  - Add/Remove items with ease.
  - Real-time total calculation.
  - Persistence (session or consistent state management).

- **📦 Order Tracking**:
  - View order history with status updates.
  - Detailed breakdown of past orders.

---

## 🛠️ Tech Stack & Architecture

This project leverages the latest advancements in the Angular ecosystem to ensure performance and maintainability.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Material](https://img.shields.io/badge/Angular_Material-DD0031?style=for-the-badge&logo=angular&logoColor=white)

### Core Technologies
- **Framework**: Angular (Latest Version)
- **Architecture**: Standalone Components
- **State Management**: **Angular Signals** (`signal`, `computed`) & RXJS Interop (`toSignal`).
- **Styling**: Vanilla CSS with modern variables & Flexbox/Grid layouts + Angular Material Components.
- **Rendering**: Server-Side Rendering (SSR) capable (via `@angular/ssr`).

### Project Structure (`src/app`)

The application follows a clean **Core-Feature** architecture:

```
src/app/
├── 📂 core/             # Singleton services and shared logic
│   ├── 📂 services/     # MenuService, CartService (State & API calls)
│   ├── 📂 models/       # TypeScript interfaces (MenuItem, Order)
│   ├── 📂 data/         # Mock data for menu items
│   └── 📂 layout/       # Global UI shell (Navbar, Footer)
│
├── 📂 features/         # Feature-based functionality
│   ├── 📂 menu/         # Menu listing and filtering logic
│   ├── 📂 cart/         # Shopping cart view and management
│   └── 📂 orders/       # Order history and details
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- **Node.js**: v18.13.0 or higher.
- **npm**: v9.0.0 or higher.

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.
2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the Application

- **Development Server**:
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

- **Build**:
    ```bash
    ng build
    ```
    The build artifacts will be stored in the `dist/` directory.

- **Run Server-Side Rendering (SSR)**:
    ```bash
    npm run serve:ssr:restaurant-app
    ```

---


## 🧪 Best Practices Used

- **Dependency Injection**: Services are injected using the modern `inject()` function.
- **Reactive Primitives**: Extensive use of **Signals** for synchronous state (e.g., category selection) and **Observables** for asynchronous data (simulating API calls).
- **Type Safety**: Strict TypeScript typing across models and services.
- **Modularity**: Separation of concerns between `core` (data/logic) and `features` (presentation).

---

## 📝 License

This project is open-source and available for educational and personal use.

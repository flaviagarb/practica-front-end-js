# 🛍️ Wallapop Clone - Frontend Practice with JavaScript
This is a frontend project developed as part of the KeepCoding Full Stack Web Development Bootcamp. It simulates a second-hand marketplace (similar to Wallapop), where users can register, log in, and interact with products. The frontend is built with **HTML**, **CSS**, **JavaScript (ES Modules)**, and **Bootstrap**, and communicates with a custom backend based on **Sparrest API**.

---

## Features

### Public area

- Home page with a list of products fetched from Sparrest API
- Products displayed as Bootstrap cards, with:
  - Product name
  - Price
  - Tags
  - Image
- Loader while data is being fetched
- Redirection to login if the user is not authenticated

### Private area

- **User authentication** (login & signup) using Sparrest API
- Authentication token saved in `localStorage`
- Session persistence between page reloads
- Logout functionality that clears the session

### Product management

- Product creation form (title, price, image, tags)
- Field validation and loading indicators
- Product deletion only available to the product’s owner
- Custom alert messages and confirmation dialogs

### Code structure

- Modular JavaScript using ES modules
- Separation of logic into services, utilities, and views
- Use of DOM manipulation and `fetch` for API requests

---

## Technologies Used

- **JavaScript (ES Modules)** – App logic and API communication
- **HTML & CSS** – Static structure and custom styles
- **Bootstrap** – Layout and responsive UI components
- **Sparrest API** – Backend service for user and product data
- **localStorage** – Token persistence
- **SweetAlert** – User-friendly modal dialogs
- **ESLint** – Code linting and style consistency

---

## Getting Started

1. Clone the repository:  
   `git clone https://github.com/flaviagarb/backend-node.js-mongodb-practice.git`

2. Open the project folder in your editor

3. Make sure the **Sparrest API backend** is running and accessible

4. Launch the app:  
   - Open `index.html` in your browser  
   - Or use a local server (e.g., VS Code Live Server extension)

---

## Credits

Developed by Flavia Garbetta during the Web18 Bootcamp at KeepCoding.
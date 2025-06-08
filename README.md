# Aspire Interview Assignment – Dynamic Card Management App

This project was developed as part of an interview assignment for **Aspire**. The task was to take a static CSS-based UI challenge and build a fully functional, interactive, and dynamic application from it.

## 📱 Tech Stack

- **React Native**
- **TypeScript**
- **Redux** (structure included)
- **Redux Persist**
- **Clean Architecture Principles**

---

## ✨ Features

### 🔁 Card Carousel

- On app launch, a set of preloaded cards are displayed in a horizontal carousel.
- All card data is dynamically generated and managed in state.

### ➕ Add New Card

- A modal allows users to add a new card by entering a card name.
- The system automatically generates:
  - A random card number
  - A random cvv.

### ❄️ Freeze / Unfreeze Card

- Cards can be toggled between frozen and active states.
- A frozen card is visually distinguished (e.g., with reduced opacity).
- Toggle button updates dynamically between “Freeze” and “Unfreeze”.

## 📁 Project Structure

- **TypeScript**: Used throughout with strict typing for components, utilities, and state.
- **Redux**: Full structure is implemented for scalability, although not all features use it in this task.
- **API Layer**: Included a clean abstraction to allow future API calls using a single reusable method.
- **Assets and DLS Folder**: Setup to easily plug in Aspire’s Design Language System for UI scalability.
- **Clean Architecture**:
  - Presentation Layer is separated and kept clean.
  - Components are organized for maximum readability and maintainability.

---

## 🧠 Best Practices Followed

- Component-driven structure with reusable UI blocks
- Clear folder structure and naming conventions
- Strict TypeScript usage with defined data models
- Modular and scalable codebase prepared for future features

---

## 🛠️ How to Run

1. Clone the repo
2. Install dependencies
   ```bash
   npm install
   ```

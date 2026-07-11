# 🛒 ShoppyGlobe - E-Commerce Application

ShoppyGlobe is a responsive e-commerce web application built using **React**, **Redux Toolkit**, **React Router**, and **Tailwind CSS**. It allows users to browse products, search for items, view product details, manage their shopping cart, and complete a simple checkout flow.

---

## Features

* Browse products fetched from the DummyJSON API
* Search products using Redux
* View detailed product information
* Add products to the shopping cart
* Increase or decrease product quantity
* Remove individual products from the cart
* Clear the entire cart
* Order summary with total items and total price
* Checkout page with shipping details form
* Order success page with automatic redirection
* Custom 404 (Not Found) page
* Responsive design for mobile, tablet, and desktop
* Code splitting using React.lazy and Suspense
* Lazy loading for images
* Custom reusable hooks for data fetching
* Error handling for API requests

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Redux Toolkit
* Tailwind CSS

### API

* DummyJSON API

### Icons

* Lucide React

### Build Tool

* Vite

---

## Folder Structure

```text
src
│── components
│   ├── CartItem
│   ├── Hero
│   ├── ProductCard
│   ├── FeaturedProducts
│   ├── SearchBar
│   ├── Header
│   ├── Footer
│   ├── Loader
│
│── hooks
│   ├── useProducts
│   ├── useProduct
│
│── pages
│   ├── Home
│   ├── ProductDetails
│   ├── Cart
│   ├── Checkout
│   ├── Success
│   ├── NotFound
│
│── redux
│   ├── store
│   ├── cartSlice
│   ├── searchSlice
│
│── services
│   ├── api
│
│── routes
│   ├── router
│
└── App.jsx
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/mohitsingh540zs-dotcom/shoppy-globe.git
```

Move into the project directory

```bash
cd shoppyglobe
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## Application Pages

* Home
* Product Details
* Shopping Cart
* Checkout
* Order Success
* 404 Not Found

---

## Concepts Used

* Functional Components
* React Hooks
* Custom Hooks
* React Router
* Dynamic Routing
* Redux Toolkit
* State Management
* Conditional Rendering
* List Rendering
* Event Handling
* Lazy Loading
* Suspense
* Responsive Design

---

## API Used

DummyJSON Products API

https://dummyjson.com/products

---

## GitHub Repository

Add your repository link here:

```text
https://github.com/mohitsingh540zs-dotcom/shoppy-globe
```

---

##  Author

**Mohit Singh Bisht**

---

## License

This project was created for learning purposes as part of a React and Redux assignment.

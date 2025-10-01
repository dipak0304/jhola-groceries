

## 🛒 Jhola Grocery Delivery Website

A Grocery Delivery Web Application built with the MERN stack (MongoDB, Express, React, Node.js). Browse, add to cart, and order groceries online with ease!


![developer](https://img.shields.io/badge/Developed%20By%20%3A-Dipak%20Bohara-red)

## Social Media
Any suggestion and feedback is welcome. You can message me on 

[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/dipak.bohara03/)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/dipakbohara006)

#### **Key Features:**

* **Product Listing:** Browse through available grocery items with images, prices, and descriptions.
* **User Authentication:** Secure login and registration system for customers and admins.
* **Shopping Cart:** Add and remove products, view cart details, and proceed to checkout.
* **Order Management:** Admin panel to manage product listings and track customer orders.
* **Payment Integration:** Integration with payment gateways for smooth transactions.

#### **Tech Stack:**

* **Frontend:** React
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **Deployment:** Vercel

#### **Live Links:**
https://jhola-groceries-client.vercel.app/

## 📝 Installation (Optional)

If someone wants to run locally:

# Clone repo
git clone https://github.com/dipak0304/groceries.git

# Backend
cd groceries-server
npm install
npm run dev

# Frontend
cd ../groceries-client
npm install
npm run dev


If you want, I can also create a super polished GIF banner at the top showing “Browse → Cart → Checkout → Delivered” workflow, which will make your GitHub page look like a professional SaaS project.

Do you want me to do that too?

You said:
can you add that cart code also
ChatGPT said:

Absolutely! I can help you add a shopping cart feature snippet that works with your React frontend and integrates with your backend. I’ll provide a clean, reusable React cart component along with context for managing cart state.

Here’s a complete example for your project:

1️⃣ AppContext.js (for global state)
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item._id === product._id);
      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };



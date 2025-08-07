# 📸 Captionify

**Captionify** is a fun and interactive web application that uses AI to generate creative and meaningful captions for your uploaded images. Whether you're posting on social media or just looking for a laugh, Captionify turns your snapshots into stories.

---

## 🚀 Features

- 📷 Upload any image
- 🤖 Get AI-generated captions using powerful language models
- 📝 Save or copy captions for later
- 🗂️ View caption history (optional)
- 🔒 User authentication (register & login)
- 🛠️ JWT-protected routes
- ☁️ Integration with OpenAI (or Gemini, etc.)

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- OpenAI API (or Gemini API)
- dotenv

### Frontend
- React.js (Vite)
- Axios
- React Router DOM
- Tailwind CSS (optional)

---

## Day 1 - Setting up file Structure


## Day 2 – Authentication (Register + Login)

### Objective:

Implement secure user authentication using JWT.

### Completed Tasks:

Installed dependencies:

npm install bcryptjs jsonwebtoken

Created User model:

Located at server/models/User.js

Built Register & Login functionality:

Register: /api/auth/register
Login: /api/auth/login

### Includes:

Password hashing using bcryptjs
JWT token generation using jsonwebtoken
Error handling for existing users and invalid credentials

## Day 3 – Protected Routes + Core API

### Objective:
Implement core backend APIs for your project.

### Completed Tasks:

    #### Created JWT Middleware:
        File: server/middleware/authMiddleware.js
        Verifies JWT token from request headers
        Attaches user ID to request object if valid
    #### Identified Core Entity:
        Entity: Caption
        Fields: userId, imageUrl, caption, createdAt
    #### Implemented CRUD API routes:
        Create: POST /api/captions
        Read (all): GET /api/captions
        Read (single): GET /api/captions/:id
        Update: PUT /api/captions/:id
        Delete: DELETE /api/captions/:id
        All routes are protected using JWT middleware to ensure only authenticated users can access them.
    #### Tested with Postman:
        Verified token required for all routes
        Tested create, fetch, update, and delete operations.

## Day 4 – Frontend Setup + Routing

### Objective:

Set up the React frontend application with basic navigation using React Router DOM.

### Completed Tasks:

    #### Initialized Vite React App:
        npm create vite@latest frontend
        # Selected: React + JavaScript
        cd frontend
        npm install
    #### Installed Dependencies:
        npm install axios react-router-dom
    #### Created Pages:
        Login.jsx
        Register.jsx
        Dashboard.jsx
    #### Configured React Router:
        Used BrowserRouter, Routes, and Route in App.jsx to handle routing.
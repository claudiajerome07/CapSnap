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
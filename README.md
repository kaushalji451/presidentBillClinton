# President Clinton Official Website Clone (MERN Stack)

This is a full-stack clone of [https://www.presidentclinton.com](https://www.presidentclinton.com), built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project aims to recreate the site’s look and functionality with modern technologies, responsive design, and a scalable backend.

---

## 📌 Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)

---

## 🚀 Demo

> Coming Soon — to be deployed on Vercel (frontend) and Render (backend).

---

## ✨ Features

- Full React.js frontend with Tailwind CSS for styling
- Express.js backend with RESTful APIs
- MongoDB database using Mongoose for schema modeling
- Functional Contact Form with MongoDB persistence
- Dynamic News Section served from the backend
- Timeline, Biography, Gallery, and 404 pages
- Clean, responsive, and mobile-friendly layout
- Modular and maintainable code structure

---

## 🛠️ Tech Stack

| Category   | Technology |
|------------|------------|
| Frontend   | React, Vite, React Router DOM, Tailwind CSS |
| Backend    | Node.js, Express.js |
| Database   | MongoDB with Mongoose |
| Tools      | Axios, Dotenv, Nodemon, PostCSS, Git |
| Deployment | Vercel (frontend), Render or Railway (backend), MongoDB Atlas (cloud DB) |

---

## 📁 Folder Structure

```
president-clinton-clone/
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── assets/  # Images
│       ├── pages/   # Page-level components
│       ├── components/
│       └── main.jsx, App.jsx
├── server/          # Express backend
│   ├── routes/
│   ├── models/
│   └── index.js
├── .env             # Backend env variables
├── README.md
```

---

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)
- npm / yarn

### 1. Clone the repository

```bash
git clone https://github.com/your-username/president-clinton-clone.git
cd president-clinton-clone
```

### 2. Setup Backend (server)

```bash
cd server
npm install
cp .env.example .env     # or create your own .env
npm run dev              # uses nodemon
```

> Example `.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/presidentdb
```

### 3. Setup Frontend (client)

```bash
cd ../client
npm install
npm run dev              # starts Vite dev server
```

> Optional `.env` for frontend:
```
VITE_API_BASE_URL=http://localhost:5000
```

---

## 📜 Available Scripts

### Frontend

| Command       | Description                      |
|---------------|----------------------------------|
| `npm run dev` | Start React app with Vite        |
| `npm run build` | Build for production           |
| `npm run preview` | Preview built site locally  |

### Backend

| Command        | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Start server with Nodemon     |
| `npm start`    | Start server (no hot reload)  |

---

## 🌐 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/news`      | Get list of news posts  |
| POST   | `/api/contact`   | Submit contact message  |

---

## 🖼️ Screenshots

Coming soon...

---

## ☁️ Deployment

- Frontend (React): [Vercel](https://vercel.com/)
- Backend (Node): [Render](https://render.com/), [Railway](https://railway.app/)
- Database: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🔒 Environment Variables

### Backend (`server/.env`)

| Variable     | Description                     |
|--------------|---------------------------------|
| `PORT`       | Port number (default: 5000)     |
| `MONGO_URI`  | MongoDB connection string       |

### Frontend (`client/.env`)

| Variable              | Description                     |
|-----------------------|---------------------------------|
| `VITE_API_BASE_URL`   | API base URL for Axios calls    |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

> Feel free to fork or contribute. Pull requests are welcome!

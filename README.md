# 📚 SHIKSHA - E-Learning Platform (Frontend)

SHIKSHA is a modern, full-featured **e-learning web application** built with the **MERN stack**. It offers users a smooth course-learning experience with secure OTP-based login, progress tracking, and integrated Razorpay payments. Admins have full control over course and lecture management, user roles, and more.

## 🌐 Deployed Version

You can access the live deployed versions of SHIKSHA below:

| 🚀 Frontend (Vercel) | https://shiksha-frontend-ochre.vercel.app/login |
| 🖥️ Backend (Render API) | 

## 🚀 Tech Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** OTP-based Login
- **Payments:** Razorpay Integration
- **Deployment:** 
  - **Frontend:** Vercel
  - **Backend:** Render

## 🔧 Features

### 👨‍🎓 User Features
- OTP-based secure login
- View available courses and lectures
- Progress bar showing **watched / total** lectures
- ✅ Tick marks for already viewed lectures
- Razorpay payment integration for course access
- Light/Dark mode toggle

### 🛠️ Admin Features
- Add, delete, or update courses
- Add or delete lectures with video preview
- Role management:
  - Promote any user to **admin**
  - **Super admin protection** – new admins cannot demote or change super admin roles
- View all registered users and manage them

## 💻 How to Run the Project Locally

### 🔃 Prerequisites
- Node.js and npm installed
- MongoDB (local or MongoDB Atlas)
- Git installed

### 🧩 Steps to Run

```bash
# 1. Clone the repositories
git clone https://github.com/your-username/Shiksha-frontend.git
git clone https://github.com/your-username/Shiksha-backend.git

# 2. Install frontend dependencies
cd Shiksha-frontend
npm install

# 3. Install backend dependencies
cd ../Shiksha-backend
npm install

# 4. Make a .env file 
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_API_KEY=your_razorpay_key
RAZORPAY_API_SECRET=your_razorpay_secret

# Start backend server
cd Shiksha-backend
npm run dev

# Start frontend server (in a new terminal)
cd Shiksha-frontend
npm run dev

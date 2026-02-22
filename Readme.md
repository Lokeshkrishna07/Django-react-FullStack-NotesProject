# 📝 Full Stack Notes App (Django + React + JWT)

A full-stack Notes application built using **Django REST Framework** for the backend and **React (Vite)** for the frontend.  
Authentication is handled using **JWT (SimpleJWT)**.

---

## 🚀 Features

- User Registration
- User Login (JWT Authentication)
- Create Notes
- View Notes
- Delete Notes
- Protected Routes
- Token Refresh Handling
- Loading Indicators

---

## 🛠 Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- SimpleJWT
- SQLite (default)

### Frontend
- React (Vite)
- Axios
- React Router DOM
- LocalStorage (for token storage)

---

## 📂 Project Structure

```
backend/
│
├── api/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│
├── project/
│   ├── settings.py
│   ├── urls.py
│
frontend/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── api.js
│   ├── App.jsx
```

---

## ⚙️ Backend Setup

### 1️⃣ Navigate to backend folder

```bash
cd backend
```

### 2️⃣ Create virtual environment

```bash
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 4️⃣ Run migrations

```bash
python manage.py migrate
```

### 5️⃣ Start server

```bash
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000/
```

---

## 💻 Frontend Setup

### 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173/
```

---

## 🔐 Authentication Flow

1. User registers at:
   ```
   POST /api/user/register/
   ```

2. User logs in at:
   ```
   POST /api/token/
   ```

3. Access & Refresh tokens stored in localStorage.

4. Axios automatically attaches:

```
Authorization: Bearer <access_token>
```

5. Protected routes require valid JWT.

---

## 📌 API Endpoints

### 🔑 Auth
- `POST /api/user/register/`
- `POST /api/token/`
- `POST /api/token/refresh/`

### 📝 Notes
- `GET /api/notes/`
- `POST /api/notes/`
- `DELETE /api/notes/delete/<id>/`

---

## 🧠 What I Learned

- JWT Authentication with SimpleJWT
- Protected Routes in React
- Axios Interceptors
- DRF Permissions & Authentication
- Handling Loading States Properly
- Debugging Full Stack Applications

---

## 👨‍💻 Author

Built as a full-stack learning project to understand:
- Authentication
- API integration
- Frontend-backend communication
- Production-level debugging

---

## 📜 License

This project is for learning purposes.
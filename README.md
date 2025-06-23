# 🏡 Instalodge

**Instalodge** is a full-stack lodging and rental platform inspired by Airbnb. Users can create, edit, delete, and view property listings, leave reviews, and explore locations using an interactive map powered by **Mapbox**.

Built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary**, the app features user authentication, image uploads, geocoding, and a modern Bootstrap 5 interface.

---

## 📸 Screenshots

> _![image](https://github.com/user-attachments/assets/ed2c2189-3f23-475e-aa5d-4890dae05899)_

---

## ✨ Features

- ✅ User Authentication (register, login, logout)
- 🏠 Create / Read / Update / Delete listings
- 🌍 View property location on interactive **Mapbox GL** map
- 💬 Add and delete reviews
- 📷 Upload listing images via **Cloudinary**
- 🔒 Authorization checks (only listing owner can edit/delete)
- 🚫 Flash messages for error/success feedback

---

## 🛠️ Tech Stack

| Category     | Technologies Used                            |
|--------------|-----------------------------------------------|
| Backend      | Node.js, Express, MongoDB, Mongoose           |
| Frontend     | EJS, Bootstrap 5, JS, CSS                     |
| Auth         | Passport.js (Local Strategy)                  |
| Image Upload | Multer, Cloudinary                            |
| Maps & Geo   | Mapbox SDK & Geocoding API                    |
| Utils        | connect-flash, method-override, dotenv        |

---

## 🗺️ Live Demo

> _[Live](https://instalodge-project.onrender.com/listings)_

---

## 📂 Folder Structure

Instalodge/
├── models/ # Mongoose schemas
├── routes/ # Express route files
├── views/ # EJS templates
├── public/ # Static assets (CSS, JS)
├── middleware/ # Auth and validation middleware
├── app.js # Main server file
├── .env # Environment variables
├── package.json

---

## 🚀 Getting Started Locally

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/instalodge.git
cd instalodge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables
- Create a .env file in the root directory with the following:
```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
ATLASDB_URL=your_mongodb_uri
SECRET=your_session_secret
```

### 4. Run the App

```bash
node app.js
```
Visit: `http://localhost:8080`

---

## 👤 User Roles
- Guests can view listings
- Registered users can:
    - Create, update, and delete their own listings
    - Leave and delete their own reviews

---

## 🙌 Acknowledgements
- Mapbox GL JS
- Cloudinary
- Bootstrap 5
- The Web Developer Bootcamp by Colt Steele

---

## ✍️ Author

**[@srnsksyp](https://github.com/srnsksyp)**  
Feel free to **fork**, **contribute**, or give it a ⭐ if you liked the project!

---


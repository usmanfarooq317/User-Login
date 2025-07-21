# User-Login

This repository contains a user login system built with **Node.js**, **Express.js**, and **MongoDB**. It features user registration, login, and authentication functionalities.

## Features

- ✅ User Registration  
- ✅ User Login  
- ✅ Session Management  
- ✅ Password Hashing (using bcrypt)  
- ✅ JWT (JSON Web Tokens) for authentication  
- ✅ EJS for templating  

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ODM)
- **bcrypt** – For password hashing
- **dotenv** – For environment variable management
- **ejs** – Embedded JavaScript templating
- **express-session** – Simple session middleware
- **jsonwebtoken** – For creating/verifying JWTs
- **mongoose** – MongoDB object modeling

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/usmanfarooq317/User-Login.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd User-Login
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

## Usage

To start the server:

```bash
node app.js
```

Or for development (with nodemon):

```bash
nodemon app.js
```

## Project Structure

```
User-Login/
├── controllers/       # Route controller functions
├── middleware/        # Middleware (e.g., auth checker)
├── models/            # Mongoose models
├── public/            # Static assets (CSS, JS)
├── routes/            # Express route definitions
├── views/             # EJS templates
├── app.js             # App entry point
└── .env               # Environment variables
```



## License

This project is licensed under the **ISC License**.

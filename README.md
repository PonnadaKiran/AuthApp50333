# MERN Stack Authentication and Authorization

This project is a simple authentication and authorization system built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- User Registration and Login
- JWT-based Authentication
- Protected Routes with Role-Based Access

## Technologies Used

### Frontend

- **React**
- **React Router**
- **React Toastify**

### Backend

- **Express**
- **MongoDB with Mongoose**
- **JWT for Authentication**
- **Bcrypt for Password Hashing**

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/PonnadaKiran/AuthApp50333.git
    cd AuthApp50333
    ```

2. **Install dependencies**:

    - Backend:
      ```bash
      cd server
      npm install
      ```

    - Frontend:
      ```bash
      cd client
      npm install
      ```

3. **Set up environment variables** in the `server` directory:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=8080
    ```

4. **Start the development servers**:

    - Backend:
      ```bash
      cd server
      npm run dev
      ```

    - Frontend:
      ```bash
      cd client
      npm start
      ```

## Usage

- Access the app at `http://localhost:3000`.
- Register or log in to explore the authentication features.

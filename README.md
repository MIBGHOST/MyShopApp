# MyShopApp

MyShopApp is a web application for managing a shop, including user registration, login, product management, and administrative functions. Built using Node.js, Express, MongoDB, and EJS, it provides a comprehensive solution for shop management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/myshopapp.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd myshopapp
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    JWT_KEY=your_jwt_secret
    EXPRESS_SESSION_SECRET=your_session_secret
    ```

5. **Configure MongoDB:**

    Ensure you have a MongoDB instance running. You can use a local instance or a cloud service like MongoDB Atlas. Update the `config/development.json` file with your MongoDB URI:

    ```json
    {
        "MONGODB_URI": "your_mongodb_uri"
    }
    ```

6. **Run the application:**

    ```bash
    npx nodemon app.js
    ```

    The application should now be running on `http://localhost:3000`.

## Usage

- **Home Page:** Access the home page at `http://localhost:3000`.
- **User Registration:** Users can register at `http://localhost:3000/users/register`.
- **User Login:** Users can log in at `http://localhost:3000/users/login`.
- **Admin Product Creation:** Admins can access the product creation page at `http://localhost:3000/owners/admin`.

## Routes

### User Routes

- `POST /users/register` - Register a new user.
- `POST /users/login` - Log in a user.

### Owner Routes

- `POST /owners/create` - Create a new owner (development only).
- `GET /owners/admin` - Render the admin product creation page.

### Product Routes

- `GET /owners/products/create` - Render the product creation form.
- `POST /owners/products/create` - Handle product creation.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling tool.
- **EJS**: Embedded JavaScript templating.
- **Multer**: Middleware for handling `multipart/form-data`.
- **Connect-Flash**: Middleware for flash messages.
- **Express-Session**: Middleware for session management.
- **Nodemon**: Utility for automatically restarting the server.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Additional Notes:

1. **File Structure:**
    - `app.js`: Main application file.
    - `config/mongoose-conn.js`: Mongoose connection configuration.
    - `routes/`: Directory containing route definitions.
    - `models/`: Directory containing Mongoose models.
    - `views/`: Directory containing EJS templates.
    - `public/`: Directory for static assets.

2. **Flash Messages:**
    Flash messages are used to display success and error messages. Ensure that your views are set up to display these messages.

3. **Sessions:**
    Express sessions are used for managing user sessions. Ensure that session secrets are kept secure.

---

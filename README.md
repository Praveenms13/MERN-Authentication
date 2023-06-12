# Authentication API

This is an authentication API built with Node.js and Express.

It provides registration(signup), authentication(login), and profile management features for users, designed to provide a secure and scalable authentication system for web applications. 

It follows the MVC (Model-View-Controller) architectural pattern and incorporates various features and technologies for advanced authentication.


***NEGLECT FRONTEND FOLDER**
## API Endpoints

- `POST /api/users`: Register a new user.
- `POST /api/users/auth`: Authenticate a user.
- `POST /api/users/logout`: Logout a user.
- `GET /api/users/profile`: Get user profile information.
- `PUT /api/users/profile`: Update user profile information.
- `GET /`: Home route.


## Functionality
#### The application provides the following functionalities for user authentication:

- Register: Users can create new accounts by providing the required information.
- Login: Users can log in to their accounts using their credentials.
- Logout: Users can log out from their accounts, terminating the current session.
- Update Profile: Users can update their profile information such as name, email, password, etc.
- Get User Profile: Users can retrieve their profile information.
- Home: Users can navigate to the home page.


## Features

- MongoDB: The project uses MongoDB as the database to store user information securely and the MongoDB API for seamless integration with the database.

- Custom Routing Models: Custom routing models are implemented to handle different routes and actions.
- Advanced Authentication: The authentication system incorporates advanced features for secure user authentication.
- Secure JWT Token: JWT (JSON Web Token) is used for authentication, and the generated tokens are valid for one month.
- HTTP-only Cookie: The project utilizes HTTP-only cookies for enhanced security and protection against cross-site scripting (XSS), XSRF (Cross-Site Request Forgery), and cookie hijacking.
- A- synchronous Error Handling: The project utilizes asynchronous error handling techniques to handle errors efficiently and provide meaningful error messages and enhance user experience
- .env File: The project uses a separate .env file to store sensitive information and ensure security.


## Integration with Other Projects

- This authentication project can be easily integrated with other web applications or projects that require user authentication. By incorporating the provided authentication functionalities, developers can save time and effort in implementing their own authentication systems.


## Security Measures
The project is designed with security in mind and includes measures against common security vulnerabilities such as cross-site scripting (XSS), XSRF (Cross-Site Request Forgery), and cookie hijacking. The use of JWT tokens, HTTP-only cookies, and secure error handling techniques helps ensure the security and integrity of user data.

Please note that while this project includes security measures, it is essential to regularly update dependencies, follow best practices, and conduct security audits to maintain a robust and secure authentication system.


## Installation and Setup
To set up the project, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies using npm or yarn: npm install or yarn install.
- Create a .env file in the root directory and set the necessary environment variables.
- Start the application: npm start or yarn start.
- Access the application on the specified port (default is 3000): http://localhost:3000.

## .ENV File Looks Like 

- NODE_ENV=development
- PORT=6000
- MONGO_URI=''
- JWT_SECRET_KEY=abc123
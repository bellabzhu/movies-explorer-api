# Movies Explorer - Backend
This repository contains the backend code for the project Movies Explorer. The project is a web application developed using React.

# Description
This repository contains the backend code for a website built using Node.js, MongoDB, and Express.js. The backend provides the necessary APIs and functionality to interact with the database and handle various operations required by the website. It implements features such as registration, login, profile editing, and managing saved movies.

## Live Demo
Check out the [live demo](https://bella.nomoredomains.monster) of the project to see it in action.

## Frontend
Check out the [frontend of this project](https://github.com/bellabzhu/movies-explorer-frontend) made with **React.js**.

## Features
* Secure HTTP-only Cookies: The backend uses secure HTTP-only cookies for session management and authentication, ensuring that user data is securely stored and transmitted.
* Error Handling: The code includes robust error handling mechanisms to handle and manage various types of errors that may occur during the execution of the application.
* Winston: The backend utilizes Winston, a versatile logging library for Node.js, to write logs. This helps in monitoring and troubleshooting the application's behavior.
* Joi: Data validation is performed using Joi, a powerful schema description language and data validator for JavaScript. It ensures that the data received by the backend conforms to the specified rules.
* User Authentication and Authorization: Implemented an authentication system using JSON Web Tokens (JWT). This allows users to securely register, log in, and access protected resources based on their roles and permissions.
* Password Encryption: Enhanced security by encrypting user passwords using a hashing algorithm like bcrypt. This ensures that sensitive user information is not stored in plain text and helps protect against unauthorized access.
* Rate Limiting: The backend is protected from abuse or malicious activities by implementing rate limiting mechanisms. These help prevent excessive requests from a single client or IP address, ensuring fair usage and protecting server resources.

## Installation
Clone the repository: 

```
git clone https://github.com/bellabzhu/movies-explorer-api
```
Install dependencies: 
```
npm install
```
Run the project: 
```
npm start
```
The server should now be running on http://localhost:3000, ready to handle API requests.

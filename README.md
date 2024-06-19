
# Todo App Back-end

This project is a Todo back-end application built with Node.js,Express, with MongoDB as the database. The application will support user authentication, allowing users to sign up, log in, and perform CRUD (Create, Read, Update, Delete) operations on their Todo lists. Additionally, users will be able to search, tag, and paginate their Todo lists. We will use JWT (JSON Web Token) for authentication.

## Features

1. When the user enters the platform, the user needs to sign-up/sign-in to create the todo list.
2. An authentication token is created with the help of user credentials.
3. The user can create, update, delete, and see the list of todos created.
4. The user can see a particular todo that they have created.
5. The user can search the todo list based on a search string.
6. All of the APIs have pagination support.
7. Users can tag the todo to pin or make it their favorite.
8. The user information and todo list are stored in MongoDB.

4. Run `npm start` to start the server

## API Endpoints

### User
- `POST /api/users/register` - Register a new user  
- `POST /api/users/login` - Login a user

### Todo
- `POST /api/todos/create` - Create a new todo
- `GET /api/todos/fetch` - List of todos
- `GET /api/todos` - Get all todos (with pagination and search)
- `GET /api/todos/:id` - Get a specific todo by ID
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo


## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```sh
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/todo-app
    JWT_SECRET=your_jwt_secret
    ```

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **JSON Web Tokens (JWT)**: Secure authentication mechanism.
- **Postman**: API Development, Testing.



## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


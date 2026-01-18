# 🚀 Full Stack Task Manager

A beginner-friendly, full-stack task management application built with the MERN-like stack (React, Node.js, Express). This project demonstrates the core concepts of building a modern web application with a separate frontend and backend communicating via a RESTful API.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

## ✨ Features

- **Full CRUD Operations**: Create, Read, Update, and Delete tasks effortlessly.
- **Interactive UI**: Mark tasks as complete/incomplete with a single click.
- **Task Statistics**: View real-time counts for total, completed, and pending tasks.
- **RESTful API**: Backend built with Express providing clean, predictable endpoints.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Clean State Management**: Frontend uses React's `useState` and `useEffect` hooks.

## 📁 Project Structure

## 🛠️ Technology Stack

| Layer        | Technology |
|--------------|------------|
| **Frontend** | React, CSS3 |
| **Backend**  | Node.js, Express.js |
| **API**      | RESTful JSON API |
| **Communication** | Fetch API |
| **Package Manager** | npm |

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js** (v16 or higher) and **npm** installed.
- A code editor like VS Code.
- A web browser (Chrome, Firefox, etc.).

### Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/shivkumargurjar/fullstack-task-manager.git
    cd fullstack-task-manager
    ```

2.  **Set up the Backend Server**
    ```bash
    cd backend
    npm install           # Install backend dependencies
    npm start             # Runs the server on http://localhost:5000
    ```
    *Keep this terminal running.*

3.  **Set up the Frontend Application**
    Open a **new terminal** in the main project folder.
    ```bash
    cd frontend
    npm install           # Install frontend dependencies
    npm start             # Runs the app on http://localhost:3000
    ```
    The application should automatically open in your browser.

## 🔌 API Endpoints

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/api/tasks` | Retrieve all tasks |
| `GET`  | `/api/tasks/:id` | Retrieve a single task |
| `POST` | `/api/tasks` | Create a new task |
| `PUT`  | `/api/tasks/:id` | Update an existing task |
| `DELETE`| `/api/tasks/:id` | Delete a task |

## 📸 Application Preview

*(Screenshot or GIF placeholder)*
> *Tip: You can add a screenshot here! Name it `preview.png` and link it with `![App Screenshot](./preview.png)`*

## 💡 Learning Outcomes

By exploring this project, you will understand:
- How to structure a full-stack JavaScript application.
- The fundamentals of creating a REST API with Express.
- Connecting a React frontend to a backend using the Fetch API.
- Managing component state and side-effects in React.
- Implementing basic CRUD operations in a practical context.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 👏 Acknowledgments

- This project is built for educational purposes to help beginners grasp full-stack development.
- Inspired by the need for simple, clean, and well-documented starter projects.
- Shields.io for the awesome badges.

---
### **⭐ If you found this project helpful, don't forget to give it a star on GitHub!**

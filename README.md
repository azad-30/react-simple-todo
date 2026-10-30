# Simple To-Do List

A beginner-friendly To-Do List web app built with React, JavaScript, CSS, and Vite.

## Features

- Add a new task
- See all tasks in a list
- Mark tasks as completed with a checkbox
- Delete tasks

## Project Structure

```
react-simple-todo/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx    # Input field and Add button
│   │   ├── TodoList.jsx    # List of tasks and empty message
│   │   └── TodoItem.jsx    # One task with checkbox and Delete button
│   ├── App.jsx             # Main component holding the task list
│   ├── App.css             # Styles
│   └── main.jsx            # Starts the React app
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Requirements

- [Node.js](https://nodejs.org/) (version 18 or newer)
- [Git](https://git-scm.com/)

## Installation

```bash
npm install
```

## Running the App

Start the development server:

```bash
npm run dev
```

Then open the address shown in the terminal (usually `http://localhost:5173`).

Create a production build:

```bash
npm run build
```

## Team Collaboration (Git and GitHub)

This project is shared by a team of five members. Each member works on a separate feature branch and merges their work through a Pull Request.

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
npm install
```

### 2. Create a feature branch

Always start from the latest `main` branch:

```bash
git checkout main
git pull origin main
git checkout -b feature/<your-task-name>
```

### 3. Add and commit your changes

```bash
git add .
git commit -m "Describe your change"
```

### 4. Push your feature branch

```bash
git push -u origin feature/<your-task-name>
```

### 5. Create a Pull Request on GitHub

1. Open the repository on GitHub.
2. Click the **Compare & pull request** button shown for your branch.
3. Set the base branch to `main` and the compare branch to your feature branch.
4. Write a short title and description, then click **Create pull request**.

### 6. Review and merge a Pull Request

1. Open the **Pull requests** tab on GitHub.
2. Click the Pull Request you want to review.
3. Check the **Files changed** tab and leave comments if needed.
4. When it is ready, click **Merge pull request**, then **Confirm merge**.
5. Optionally, click **Delete branch** to clean up.

### 7. Pull the latest main branch

Run this before starting any new work so your branch has everyone else's changes:

```bash
git checkout main
git pull origin main
```

### Suggested Team Tasks

| Member | Task |
| --- | --- |
| Member 1 | Change the Add button text in `src/components/TodoForm.jsx` |
| Member 2 | Change the Delete button text in `src/components/TodoItem.jsx` |
| Member 3 | Improve the empty task message in `src/components/TodoList.jsx` |
| Member 4 | Change the application background color in `src/App.css` |
| Member 5 | Add a small footer message in `src/App.jsx` |

# Kanban MVP

This project is a simple Kanban board application, built as an MVP (Minimum Viable Product). It is set up to use Vite for a fast development experience.

## Project Structure

The project follows a standard structure for a modern web application:

-   `public/`: Contains static assets that are directly served.
-   `src/`: Contains the main source code.
    -   `assets/`: Images, fonts, and other media.
    -   `components/`: Reusable UI components.
    -   `state/`: State management logic.
    -   `styles/`: Global styles and CSS variables.
    -   `main.js`: The main entry point of the application.
-   `tests/`: Contains tests for the application.

## Getting Started

To get the project up and running, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd kanban-mvp
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

4.  **Start the development server:**
    ```sh
    npm run dev
    ```

This will start the Vite development server, and you can view the application in your browser at the specified URL.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles the app in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run preview`

Serves the production build from the `dist` folder locally.<br>
This is a good way to check the final production output before deploying.

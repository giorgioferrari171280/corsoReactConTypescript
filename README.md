# Kanban MVP

## Modalità GitHub-only
Questo repository è preparato per Vite ma **non esegue** alcun comando su GitHub web.
- Non usare `npm install`, `npm run dev`, `npm run build` su GitHub.
- L’esecuzione avverrà solo in un ambiente idoneo (locale o Codespaces).
- I file chiave sono: `index.html`, `src/main.js`, `vite.config.js` (placeholder).

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

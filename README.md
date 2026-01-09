# Notes Management App

## Overview

The Notes Management App is a React-based application that enables users to create, view, and delete notes in a simple and intuitive interface.  
The project demonstrates effective component-based architecture, centralized state management using React Hooks, and persistent data storage using the browser’s localStorage.

This application is designed to reflect real-world frontend development practices with a focus on clarity, maintainability, and user experience.

---

## Technology Stack

- **Frontend:** React.js, JavaScript (ES6)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Persistence Layer:** Browser localStorage
- **UI & Styling:** CSS, Material UI Icons
- **Tools:** Git, GitHub, VS Code

---

## Component Breakdown

-**App.jsx:**
Root component responsible for managing application state, loading behavior, and data persistence.

-**NoteForm.jsx:**
Handles user input, form validation, and triggers note creation.

-**NoteList.jsx:**
Renders the list of notes passed from the parent component.

-**NoteItem.jsx:**
Displays individual note details and provides delete functionality.

-**Loader.jsx:**
Displays a loading indicator during the initial app load.

-**EmptyState.jsx:**
Shows a placeholder message when no notes are available.


## Project Setup

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation

```bash
git clone https://github.com/niyatic886/Notes-Management-App.git
cd Notes-Management-App
npm install

Run the Application
npm run dev


State Management Explanation

All application state is centralized in App.jsx.

Notes are stored as an array of objects containing:

id

title

description

date

Adding and deleting notes updates the state using useState.

State changes are synchronized with localStorage using useEffect.

Data Persistence

Notes are saved in the browser’s localStorage.

Data persists across page refreshes.

Notes are restored when the application loads.

Assumptions & Limitations

Single-user application

No backend or authentication

Notes can be added and deleted but not edited

Data depends on browser localStorage

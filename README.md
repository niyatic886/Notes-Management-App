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

## Project Setup

### Prerequisites
- Node.js (v16 or later)
- npm

### Installation

```bash
git clone https://github.com/niyatic886/Notes-Management-App.git
cd Notes-Management-App
npm install

## Component Breakdown

### App.jsx
Root component that manages notes state, loading state, and data persistence.

### NoteForm.jsx
Handles user input and validation for adding new notes.

### NoteList.jsx
Displays a list of notes.

### NoteItem.jsx
Displays individual note details and handles deletion.

### Loader.jsx
Shows a loading indicator on initial render.

### EmptyState.jsx
Displays a message when no notes are available.


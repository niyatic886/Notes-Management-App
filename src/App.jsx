import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // ADD NOTE WITH ID
  const addNote = (note) => {
    setNotes((prevNotes) => [
      { ...note, id: Date.now() },
      ...prevNotes
    ]);
  };


  //  DELETE NOTE USING ID
  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  if (loading) {
    return (
      <div className="app-background loader-wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <div className="app-background">
      <div className="app">
        <h1>Notes Management App</h1>
        <NoteForm onAddNote={addNote} />
      </div>

       {/* Decorative Dots */}
      <div className="dots-design">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="notes-wrapper">
          <NoteList notes={notes} onDelete={deleteNote} />
        </div>
      )}
    </div>
  );
}

export default App;


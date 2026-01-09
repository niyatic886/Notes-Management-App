import { useState } from "react";

function NoteForm({ onAddNote }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "") {
            setError("Title is required");
            return;
        }

        setError("");

        onAddNote({
            title,
            description,
            date: new Date().toLocaleDateString(),
        });

        setTitle("");
        setDescription("");
    };

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <h2>Add Note</h2>

            <input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                    if (error) setError("");
                }}
            />

            {error && <p className="error">{error}</p>}

            <textarea
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit" className={title.trim() === "" ? "btn-disabled" : ""} >

                Add Note
            </button>

        </form>
    );
}

export default NoteForm;



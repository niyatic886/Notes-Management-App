function NoteItem({ note, onDelete }) {
    return (
        <div className="note-items">
            <button className="delete-note-btn" onClick={() => onDelete(note.id)}>
                Delete 🗑️
            </button>

            <h3 className="note-title">Title: {note.title}</h3>

            <p className="note-description">
                Description: {note.description}
            </p>

            <div className="note-date">{note.date}</div>
        </div>
    );
}

export default NoteItem;






import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
    return (
        <div className="notes-container">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default NoteList;

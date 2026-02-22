import "../styles/Note.css";

function Note({ note, onDelete }) {
  return (
    <div className="note-container">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default Note;
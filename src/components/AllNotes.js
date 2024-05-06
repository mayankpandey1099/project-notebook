// components/AllNotes.js
import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

const AllNotes = () => {
  const { notes, deleteNote } = useContext(NotesContext); // Changed to use deleteNote instead of setNotes

  const handleDeleteNote = (index) => {
    deleteNote(index); // Changed to use deleteNote function from context
  };

  return (
    <div className="all-notes">
      <h2>All Notes</h2>
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => handleDeleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;

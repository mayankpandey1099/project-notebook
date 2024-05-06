// components/AddNoteModal.js
import React, { useState, useContext } from "react";
import Modal from "./Modal";
import { NotesContext } from "../contexts/NotesContext";

const AddNoteModal = ({ closeModal }) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const { addNote } = useContext(NotesContext);

  const handleAddNote = () => {
    const newNote = { title: noteTitle, description: noteDescription };
    addNote(newNote);
    closeModal();
  };

  return (
    <Modal>
      <h2>Add New Note</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Note Description"
        value={noteDescription}
        onChange={(e) => setNoteDescription(e.target.value)}
      />
      <button onClick={handleAddNote}>Add to Book</button>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default AddNoteModal;

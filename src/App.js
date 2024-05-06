// App.js
import React, { useState } from "react";
import AddNoteModal from "./components/AddNoteModal";
import AllNotes from "./components/AllNotes";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Notebook App</h1>
      <button onClick={openModal}>Add New Note</button>
      <AllNotes />
      {isModalOpen && <AddNoteModal closeModal={closeModal} />}
    </div>
  );
};

export default App;

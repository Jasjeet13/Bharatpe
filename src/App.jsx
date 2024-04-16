import React, { useState, useEffect } from 'react';
import NoteList from './Components/NoteList';
import Note from './Components/Note';
import './App.css'

function App() {
  const [notes, setNotes] = useState([]);

  // to handle adding a new note
  const handleAddNote = (title) => {
    setNotes([...notes, { id: Date.now(), title, content: '' }]);
  };

  //  to handle editing a note
  const handleEditNote = (id, editedTitle, editedContent) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, title: editedTitle, content: editedContent } : note)));
  };

  //  to handle deleting a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className='app'>

      <h1 className='app-name'>MY NOTES</h1>
      <NoteList
        notes={notes}
        onAddNote={handleAddNote}
        onEditNote={handleEditNote}
        onDeleteNote={handleDeleteNote}
        
      />
    </div>
  );
}

export default App;

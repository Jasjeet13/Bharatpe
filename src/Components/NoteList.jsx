import React, { useState } from 'react';
import Note from './Note';
import './NoteList.css';

const NoteList = ({ notes, onAddNote, onEditNote, onDeleteNote }) => {
  const [newNoteTitle, setNewNoteTitle] = useState('');

  const handleAddNote = () => {
    onAddNote(newNoteTitle);
    setNewNoteTitle('');
  };

  const handleTitleChange = (event) => {
    setNewNoteTitle(event.target.value);
  };

  return (
    <div className="note-list">

      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          content={note.content}
          onEdit={(editedTitle, editedContent) => onEditNote(note.id, editedTitle, editedContent)}
          onDelete={() => onDeleteNote(note.id)}
        />
      ))}
      <input className='title-input-box' type="text" value={newNoteTitle} onChange={handleTitleChange} placeholder="Enter note title..." />
      <button className='add-note-button' onClick={handleAddNote}>Add</button>
    </div>
  );
};

export default NoteList;

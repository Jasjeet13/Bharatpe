import React from 'react'
import './Notes.css';

// useState -> manages component state , create and update data specific to the component
// useEffect -> perform side effects like data fetching , manual DOM manipulation after data remdering
import { useState,useEffect } from 'react'

function Note({title,content,onEdit,onDelete}) {
    // state variable to keep track if we are editing the note
    const [isEditing,setIsEditing] = useState(true);

    // hold current edited value of the title
    const [editedTitle,setIsEditedTitle] = useState(title);

    // holds current edited content
    const [editedContent,setEditedContent] = useState(content);

    // tracks if title is enterd or not
    const [titleEntered,setTitleEntered] = useState(Boolean(title));

    // updates edited title and content
    useEffect(() => {
        setIsEditedTitle(title);
        setEditedContent(content);
    },[title,content]);

    // sets isEditing to true to let us edit the note
    const handleEdit = () =>{
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(editedTitle, editedContent);
        setIsEditing(false);
        setTitleEntered(Boolean(editedTitle));
    };

    // called whenever there is a change in the input field
    const handleChange = (event) =>{
        // event.target is the elemet which triggered the event handler ( here the input field)
        const {name,value} = event.target;

        if(name === 'title'){
            setIsEditedTitle(value);
            setTitleEntered(Boolean(value));
        }
        else if(name === 'content'){
            setEditedContent(value);
        }
    };


  return (
    <div className='note'>
        {isEditing && (
            <div className='inputs'>
                <input className='input-title' type="text" name='title' value={editedTitle} onChange={handleChange}/>
                
                {titleEntered && (
                    <textarea className='input-content' name="content" value={editedContent} onChange={handleChange} cols="30" rows="10"></textarea>
                )}

                <button className='buttons' onClick={handleSave}>Save</button>

            </div>
            )}

            
                {!isEditing && (
                    <div className='note-view'>
                        <div>
                            <h2 className='note-heading'>{editedTitle}</h2>
                            <p className='note-content'>{editedContent}</p>
                        </div>

                        <div className='two-button'>
                            <button className='buttons' onClick={handleEdit}>Edit</button>
                            <button className='buttons' onClick={onDelete}>Delete</button>
                        </div>

                    </div>
                )}

    </div>
  )
}

export default Note
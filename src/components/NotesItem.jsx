import React from 'react'
import ActionButton from './ActionButton';
import NotesItemContent from './NotesItemContent';

function NotesItem({title, body, createdAt, id, onDelete, onArchive, isArchive}) {
  return (
    <div className="note-item">
        <NotesItemContent
            date={createdAt}
            body={body} 
            title={title} 
            />
        <ActionButton 
            id={id} 
            onArchive={onArchive} 
            isArchive={isArchive} 
            onDelete={onDelete} />
    </div>
  )
}

export default NotesItem;
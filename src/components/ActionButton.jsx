import React from 'react'

function ActionButton({onDelete,id, onArchive, isArchive}) {
  return (
    <div className="note-item__action">
      <button onClick={() => onDelete(id)} className="note-item__delete-button">Delete</button>
      <button onClick={() => onArchive(id)} className="note-item__archive-button">{isArchive ? 'Pindahkan' : 'Arsipkan'}</button>
    </div>
  )
}

export default ActionButton;
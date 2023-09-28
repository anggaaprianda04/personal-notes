import React from 'react';

function NotesInputHeader({onSearch}){
    return (
        <div className="note-app__header">
                <h1>Notes</h1>
                <input onChange={(e) => onSearch(e.target.value) } type="text" placeholder="Cari catatan" />
            </div>
    )
}

export default NotesInputHeader;
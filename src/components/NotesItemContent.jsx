import React from 'react'
import NotesItemBody from './NotesItemBody';
import NotesItemDate from './NotesItemDate';
import NotesItemTitle from './NotesItemTitle';

function NotesItemContent({title,date, body}) {
  return (
    <>
      <div className="note-item__content">
        <NotesItemTitle title={title} />
        <NotesItemDate date={date} />
        <NotesItemBody body={body} />
      </div>
    </>
  )
}

export default NotesItemContent;
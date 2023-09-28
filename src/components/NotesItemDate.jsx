import React from 'react'
import {showFormattedDate} from '../utils/index'

function NotesItemDate({date}) {
  return (
    <span className="notes-date_span">{ showFormattedDate(date)}</span>
  )
}

export default NotesItemDate;
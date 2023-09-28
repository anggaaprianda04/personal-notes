import React from 'react'
import NotesInputHeader from './NotesInputHeader';
import { getInitialData } from '../utils/index'
import NotesInput from './NotesInput';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes : getInitialData(),
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onArchiveHandler(id){
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                return {
                    ...note,
                    archived: !note.archived,
                };
            } else {
                return note;
            }
        });
        this.setState({notes});
    }

    onAddNoteHandler({title, body}){
        this.setState((prevState) => {
            return {
                notes : [
                    ...prevState.notes,
                    {
                        id : +new Date(),
                        title,
                        body,
                        createdAt: '2022-04-14T04:27:34.572Z',
                        archived: false,
                    }
                ]
            }
        })
    } 

    onDeleteHandler(id){
        const notes = this.state.notes.filter((note) => note.id !== id)
        this.setState({notes})
        console.log('hapus', notes);
    }

    onSearchHandler(text) {
        const filterSearch = this.state.notes.filter((notes) => {
                return notes.title.toLowerCase().includes(text.toLowerCase())
        })
        this.setState({notes : filterSearch})
    
        if (text == '') return this.setState({ notes : getInitialData() })
    }

    render() {
        return (
            <div>
                <NotesInputHeader onSearch={this.onSearchHandler} />
                <div className="note-app__body">
                    <NotesInput addNote={this.onAddNoteHandler}/>
                    <div className="note-app_content">
                        <h2>Catatan Aktif</h2>
                        {this.state.notes.length == 0 ? 
                        <p className="notes-list__empty-message">Tidak ada Catatan</p> : 
                        <NotesList 
                            onDelete={this.onDeleteHandler} 
                            onArchive={this.onArchiveHandler}
                            notes={this.state.notes.filter((note) => note.archived === false)}/> }
                        <h2>Arsip</h2>
                        {this.state.notes.filter((note) => note.archived === true).length == 0 ? <p className="notes-list__empty-message">Tidak ada Arsip</p> : <NotesList 
                            notes={this.state.notes.filter((note) => note.archived === true)} 
                            onArchive={this.onArchiveHandler} 
                            onDelete={this.onDeleteHandler} /> }
                    </div>
                </div>
            </div>
        )
    }
}

export default NotesApp;
import React from 'react'

class NotesInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            body : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
        this.onSubmitEvent= this.onSubmitEvent.bind(this);
    }

    onTitleChangeEventHandler(event){
        if (this.state.title.length >= 0 && event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title : event.target.value,
                }
            });   
        }
        // console.log('ini title :', this.state.title.length);
    }

    onContentChangeEventHandler(event){
        this.setState(() => {
            return {
                body : event.target.value
            }
        })
        // console.log('ini content : ', this.state.content);
    }

    onSubmitEvent(event){
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render() {
        return (
            <form className="note-input" onSubmit={this.onSubmitEvent}>
                <p>Buat Catatan</p>
                <p className="note-input__title__char-limit">Sisa Karakter : {50 - this.state.title.length}</p>
                <input  value={this.state.title} onChange={this.onTitleChangeEventHandler} type="text" placeholder="Ini adalah judul" />
                <textarea value={this.state.body} onChange={this.onContentChangeEventHandler} placeholder="Content" name="" id="" cols="30" rows="10"></textarea>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NotesInput;
import React from 'react';
import NoteEditor from './note-editor/NoteEditor';
import NoteGallery from './note-gallery/NoteGallery';

const NOTES_MODES = {
    EDIT: 'EDIT',
    DISPLAY: 'DISPLAY'
};

const NOTE_PROPERTIES = {
    TITLE: 'title',
    DESC: 'desc'
};

class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: NOTES_MODES.DISPLAY,
            noteEditing: ''
        };
        this.backToDisplay = this.backToDisplay.bind(this);
        this.startEditing = this.startEditing.bind(this);
        this.getNotePropertyValue = this.getNotePropertyValue.bind(this);
    }

    backToDisplay(){
        this.setState({
           mode: NOTES_MODES.DISPLAY
        });
    }

    startEditing(noteId){
        this.setState({
            noteEditing: noteId,
            mode: NOTES_MODES.EDIT
        });
    }

    getNotePropertyValue(noteId,property){
        if (noteId === ''){
            return '';
        }
        const note = this.props.notes.find(n => n.noteId === noteId);
        return note[property];
    }

    render(){
        var children;
        switch(this.state.mode){
            case NOTES_MODES.EDIT:
                const title = this.getNotePropertyValue(this.state.noteEditing,NOTE_PROPERTIES.TITLE);
                const desc = this.getNotePropertyValue(this.state.noteEditing,NOTE_PROPERTIES.DESC);
                children = <NoteEditor backToDisplay={this.backToDisplay}
                                       noteId={this.state.noteEditing}
                                       nuid={this.props.nuid}
                                       adminId={this.props.adminId}
                                       title={title}
                                       desc={desc}/>;
                break;
            case NOTES_MODES.DISPLAY:
                children = <NoteGallery notes={this.props.notes} startEditing={this.startEditing}/>;
                break;
            default:
                children = null;
                break;
        }
        return (
            <div className={'notes'}>
                {children}
            </div>
        );
    }
}

export default Notes;
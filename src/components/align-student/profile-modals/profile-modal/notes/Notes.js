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

    render(){
        var children;
        switch(this.state.mode){
            case NOTES_MODES.EDIT:
                children = <NoteEditor backToDisplay={this.backToDisplay}
                                       note={this.props.notes.find(n => n.noteId === this.state.noteEditing)}
                                       notes={this.props.notes}
                                       create={this.props.create}
                                       update={this.props.update}/>;
                break;
            case NOTES_MODES.DISPLAY:
                children = <NoteGallery notes={this.props.notes}
                                        startEditing={this.startEditing}
                                        delete={this.props.delete}/>;
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
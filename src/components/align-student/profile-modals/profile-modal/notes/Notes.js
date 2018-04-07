import React from 'react';
import NoteEditor from './note-editor/NoteEditor';

const NOTES_MODES = {
    EDIT: 'EDIT',
    DISPLAY: 'DISPLAY'
};

class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mode: NOTES_MODES.EDIT
        };
        this.backToDisplay = this.backToDisplay.bind(this);
    }

    backToDisplay(){
        this.setState({
           mode: NOTES_MODES.DISPLAY
        });
    }

    render(){
        var children;
        switch(this.state.mode){
            case NOTES_MODES.EDIT:
                children = <NoteEditor backToDisplay={this.backToDisplay}/>;
                break;
            case NOTES_MODES.DISPLAY:
                children = null;
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
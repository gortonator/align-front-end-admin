import React from 'react';
import Controlpanel from './ControlPanel';

export default props => (
    <div className={'note'}>
        <div className={'note-title'}>
            {props.title}
        </div>
        <div className={'note-desc'}>
            {props.desc}
        </div>

        <Controlpanel startEditing={props.startEditing} noteId={props.noteId}/>
    </div>
);
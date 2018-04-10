import React from 'react';
import Controlpanel from './ControlPanel';

export default props => (
    <div className={'note-container'}>
        <div className={'note'}>
            <div className={'note-title'}>
                {props.note.title}
            </div>
            <div className={'note-desc'}>
                {props.note.desc}
            </div>

            <Controlpanel startEditing={() => props.startEditing()}
                          delete={() => props.delete()}/>
        </div>
    </div>

);
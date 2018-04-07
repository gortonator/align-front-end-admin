import React from 'react';

export default props => (
    <div className={'note-editor-field'}>
        <div className={'note-editor-field-name'}>
            Title
        </div>
        <div className={'note-editor-field-input'}>
            <input value={props.title}
                   onChange={props.handleTitleChange}
                   className={'form-control'}/>
        </div>
    </div>
);
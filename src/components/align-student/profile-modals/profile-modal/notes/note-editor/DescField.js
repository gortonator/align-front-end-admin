import React from 'react';

export default props => (
    <div className={'note-editor-field'}>
        <div className={'note-editor-field-name'}>
            Description
        </div>
        <div className={'note-editor-field-input'}>
            <textArea value={props.desc}
                      onchange={props.handleDescChange}
                      className={'form-control'} rows="5"/>
        </div>
    </div>
);
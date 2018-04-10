import React from 'react';

export default props => (
    <div>
        <div className={'note-editor-control-container'}>
            <a className={'note-editor-control'}
               href={''}
               onClick={e => {
                   e.preventDefault();
                   props.publishChange();
               }}>
                {props.creating ? 'Create' : "Update"}
            </a>
        </div>
        <div className={'note-editor-control-container'}
        >
            <a href={''}
               onClick={e => {
                   e.preventDefault();
                   props.backToDisplay();
               }}>
                Cancel
            </a>
        </div>


    </div>
)


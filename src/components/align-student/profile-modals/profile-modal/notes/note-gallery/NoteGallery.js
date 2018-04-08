import React from 'react';
import Note from './note/Note';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';

export default props => (
    <div>
        <a className={'add-note-button'}
           href={''}
           onClick={e => {
               e.preventDefault();
               props.startEditing('');
           }}>
            <FontAwesomeIcon icon={faPlusCircle}/>
        </a>
        {props.notes.map(n => (
            <Note key={n.noteId}
                  title={n.title}
                  desc={n.desc}
                  noteId={n.noteId}
                  startEditing={props.startEditing}/>
        ))}
    </div>
);

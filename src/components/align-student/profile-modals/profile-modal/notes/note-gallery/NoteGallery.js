import React from 'react';
import Note from './note/Note';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import {NOTE_CREATION_PLACE_HOLDER} from "../../../../../../constants";

export default props => (
    <div>
        <a className={'add-note-button'}
           href={''}
           onClick={e => {
               e.preventDefault();
               props.startEditing(NOTE_CREATION_PLACE_HOLDER);
           }}>
            <FontAwesomeIcon icon={faPlusCircle}/>
        </a>
        {props.notes.map(n => (
            <Note key={n.noteId}
                  note={n}
                  delete={() => props.delete(n.noteId)}
                  startEditing={() => props.startEditing(n.noteId)}/>
        ))}
    </div>
);

import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEllipsisV from "@fortawesome/fontawesome-free-solid/faEllipsisV";

export default props => (
    <a className={'student-profile-modal-drag'}
       href={''}
       onClick={e => {
           e.preventDefault();}
       }
       onDragStart={e => {
           props.startDragging(e.clientX,e.clientY);
       }}
       onDrag={e => {
           props.dragging(e.clientX,e.clientY);
       }} onDragEnd={e => {
           props.endDragging(e.clientX,e.clientY);}
       }>
        <FontAwesomeIcon icon={faEllipsisV}/>
    </a>
);
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEllipsisV from "@fortawesome/fontawesome-free-solid/faEllipsisV";

export default props => (
    <a className={'student-profile-modal-drag'}
       href={''}
       onClick={e => {
           e.preventDefault();}
       }
        onMouseDown={e => {
            if (e.button === 0){
                props.startDragging(e.clientX,e.clientY);
            }
            e.stopPropagation();
            e.preventDefault();
        }}
       onMouseMove={e => {
           if (props.idDragging){
               props.dragging(e.clientX,e.clentY);
           }
           e.stopPropagation();
           e.preventDefault();
       }}
        onMouseUp={e => {
            if (e.button === 0){
                props.endDragging();
            }
            e.stopPropagation();
            e.preventDefault();
        }}>
        <FontAwesomeIcon icon={faEllipsisV}/>
    </a>
);



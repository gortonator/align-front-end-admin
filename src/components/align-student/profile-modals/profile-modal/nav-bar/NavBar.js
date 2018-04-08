import React from 'react';
import Drag from './parts/Drag';
import NavLinks from './parts/NavLinks';
import CloseButton from './parts/CloseButton';


export default props => (
    <div className={'student-profile-modal-nav-bar'}>
        <Drag startDragging={props.startDragging}
              dragging={props.dragging}
              endDragging={props.endDragging}
              isDragging={props.isDragging}/>

        <NavLinks display={props.display}
                  changeDisplay={props.changeDisplay}
                  numberOfNotes={props.numberOfNotes}/>

        <CloseButton closeModal={props.closeModal}/>
    </div>
);
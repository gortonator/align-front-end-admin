import React from 'react';
import Drag from './parts/Drag';
import NavLinks from './parts/NavLinks';
import CloseButton from './parts/CloseButton';

import {ASYNC_ACTION_STATUSES} from "../../../../../constants";


export default props => (
    <div className={'student-profile-modal-nav-bar'}>
        <Drag startDragging={props.startDragging}
              dragging={props.dragging}
              endDragging={props.endDragging}
              isDragging={props.isDragging}/>

        {
            props.profile !== undefined && props.profile.personalInformation !== null &&
            <NavLinks display={props.display}
                  changeDisplay={props.changeDisplay}
                  numberOfNotes={props.numberOfNotes}/>
        }

        <CloseButton closeModal={props.closeModal}/>
        <span className={'student-profile-modal-title'}>
            {props.name}'s Profile
        </span>
    </div>
);
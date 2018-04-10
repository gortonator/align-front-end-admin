import React from 'react';
import {PROFILE_MODAL_DISPLAY_CONTENT} from "../../ProfileModal";

export default props => (
    <div className={'student-profile-modal-nav-links'}>
        <a href={''}
           className={props.display === PROFILE_MODAL_DISPLAY_CONTENT.PROFILE ? 'active' : ''}
           onClick={e => {
               e.preventDefault();
               props.changeDisplay(PROFILE_MODAL_DISPLAY_CONTENT.PROFILE)}
           }>
            Profile
        </a>

        <a href={''}
           className={'with-badge' + ' ' + (props.display === PROFILE_MODAL_DISPLAY_CONTENT.NOTES ? 'active' : '')}
           onClick={e => {
               e.preventDefault();
               props.changeDisplay(PROFILE_MODAL_DISPLAY_CONTENT.NOTES)}
           }>
            Notes
            <span>
                {props.numberOfNotes}
                </span>
        </a>
    </div>
);
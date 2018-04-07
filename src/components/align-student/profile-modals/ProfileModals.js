import React from 'react';
import ProfileModal from './profile-modal/ProfileModal';

export default props => (
    <React.Fragment>
        {props.openedProfiles.map(nuid =>
            <ProfileModal key={nuid}
                          active={props.activeProfile === nuid}
                          closeModal={() => {props.closeProfileModal(nuid)}}/>)}
    </React.Fragment>
);


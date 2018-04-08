import React from 'react';
import ProfileModal from './profile-modal/ProfileModal';

export default props => (
    <React.Fragment>
        {props.openedProfiles.map(nuid =>
            <ProfileModal key={nuid}
                          notes={props.notes}
                          studentProfiles={props.studentProfiles}
                          retrieveProfile={() => {props.retrieveStudentProfile(nuid,props.token)}}
                          nuid={nuid}
                          isActive={props.activeProfile === nuid}
                          closeModal={() => {props.closeProfileModal(nuid)}}
                          name={getNameByNuid(nuid,props.students)}
                          activateThisModal={() => {props.openProfileModal(nuid)}}/>)}
    </React.Fragment>
);

function getNameByNuid(nuid,students){
    return students.find(s => s.nuid === nuid).name;
}


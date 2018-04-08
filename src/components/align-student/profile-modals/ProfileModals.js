import React from 'react';
import ProfileModal from './profile-modal/ProfileModal';

export default props => (
    <React.Fragment>
        {props.openedProfiles.map(nuid =>
            <ProfileModal key={nuid}
                          nuid={nuid}
                          isActive={props.activeProfile === nuid}
                          closeModal={() => {props.closeProfileModal(nuid)}}
                          name={getNameByNuid(nuid,props.students)}
                          activateThisModal={() => {props.openProfileModal(nuid)}}
                          studentProfiles={props.studentProfiles}
                          retrieveStudentProfile={props.retrieveStudentProfile}/>)}
    </React.Fragment>
);

function getNameByNuid(nuid,students){
    return students.find(s => s.nuid === nuid).name;
}


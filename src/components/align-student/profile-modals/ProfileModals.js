import React from 'react';
import ProfileModal from './profile-modal/ProfileModal';

export default props => (
    <React.Fragment>
        {props.openedProfiles.map(nuid =>
            <ProfileModal key={nuid}
                          notes={props.notes.filter(n => n.nuid === nuid)}
                          profile={props.studentProfiles.find(p => p.nuid === nuid)}
                          retrieveProfile={() => {props.retrieveStudentProfile(nuid,props.token)}}
                          acceptRetrievalFailure={() => {props.acceptRetrievalFailure(nuid)}}
                          nuid={nuid}
                          isActive={props.activeProfile === nuid}
                          closeModal={() => {props.closeProfileModal(nuid)}}
                          activateThisModal={() => {props.openProfileModal(nuid)}}
                          createNote={(noteContent,successCallback,failureCallback) =>
                              props.createNote(noteContent,nuid,props.token,props.adminId,successCallback,failureCallback)}
                          updateNote={(note,successCallback,failureCallback) =>
                              props.updateNote(note,props.token,props.adminId,successCallback,failureCallback)}
                          deleteNote={(noteId,successCallback,failureCallback) =>
                              props.deleteNote(noteId,props.token,successCallback,failureCallback)}/>)}
    </React.Fragment>
);





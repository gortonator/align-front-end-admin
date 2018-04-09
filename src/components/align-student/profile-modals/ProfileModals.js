import React from 'react';
import ProfileModal from './profile-modal/ProfileModal';

export default props => (
    <React.Fragment>
        {props.openedProfiles.map(nuid =>
            <ProfileModal key={nuid}
                          notes={props.notes.filter(n => n.nuid === nuid)}
                          profile={props.studentProfiles.find(p => p.nuid === nuid)}
                          retrieveProfile={() => {props.retrieveStudentProfile(nuid,props.token)}}
                          nuid={nuid}
                          isActive={props.activeProfile === nuid}
                          closeModal={() => {props.closeProfileModal(nuid)}}
                          name={getNameByNuid(nuid,props.students)}
                          activateThisModal={() => {props.openProfileModal(nuid)}}
                          createNote={noteContent => props.createNote(noteContent,nuid,props.token,props.adminId)}
                          updateNote={note => props.updateNote(note,props.token,props.adminId)}
                          deleteNote={noteId => props.deleteNote(noteId,props.token)}/>)}
    </React.Fragment>
);

function getNameByNuid(nuid,students){
    return students.find(s => s.nuid === nuid).name;
}


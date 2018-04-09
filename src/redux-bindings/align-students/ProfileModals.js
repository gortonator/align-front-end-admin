import {connect} from 'react-redux';
import ProfileModals from '../../components/align-student/profile-modals/ProfileModals';
import {retrieveStudentProfile,createNote,updateNote,deleteNote,acceptProfileRetrievalFailure} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        studentProfiles: state.alignStudent.studentProfiles,
        students: state.alignStudent.students.items,
        token: state.alignStudent.token,
        notes: state.alignStudent.notes,
        adminId: state.alignStudent.adminId
    };
}

function mapDispatchToProps(dispatch){
    return {
        retrieveStudentProfile: (nuid,token) => {
            dispatch(retrieveStudentProfile(nuid,token));
        },
        createNote: (noteContent,nuid,token,adminId,successCallback,failureCallback) => {
            dispatch(createNote(noteContent,nuid,token,adminId,successCallback,failureCallback));
        },
        updateNote: (note,token,adminId,successCallback,failureCallback) => {
            dispatch(updateNote(note,token,adminId,successCallback,failureCallback));
        },
        deleteNote: (noteId,token,successCallback,failureCallback) => {
            dispatch(deleteNote(noteId,token,successCallback,failureCallback));
        },
        acceptRetrievalFailure: nuid => {
            dispatch(acceptProfileRetrievalFailure(nuid));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileModals);
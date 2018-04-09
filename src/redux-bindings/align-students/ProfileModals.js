import {connect} from 'react-redux';
import ProfileModals from '../../components/align-student/profile-modals/ProfileModals';
import {retrieveStudentProfile,createNote,updateNote,deleteNote} from "../../actions/align-students-actions";

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
        createNote: (noteContent,nuid,token,adminId) => {
            dispatch(createNote(noteContent,nuid,token,adminId));
        },
        updateNote: (note,token,adminId) => {
            dispatch(updateNote(note,token,adminId));
        },
        deleteNote: (noteId,token) => {
            dispatch(deleteNote(noteId,token));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileModals);
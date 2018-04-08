import {connect} from 'react-redux';
import ProfileModals from '../../components/align-student/profile-modals/ProfileModals';
import {retrieveStudentProfile} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        studentProfiles: state.alignStudent.studentProfiles,
        students: state.alignStudent.students.items,
        token: state.alignStudent.token,
        notes: state.alignStudent.notes
    };
}

function mapDispatchToProps(dispatch){
    return {
        retrieveStudentProfile: (nuid,token) => {
            dispatch(retrieveStudentProfile(nuid,token));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileModals);
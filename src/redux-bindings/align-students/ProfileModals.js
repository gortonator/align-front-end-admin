import {connect} from 'react-redux';
import ProfileModals from '../../components/align-student/profile-modals/ProfileModals';
import {retrieveStudentProfile} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        studentProfiles: state.alignStudent.studentProfiles,
        students: state.alignStudent.students.items
    };
}

function mapDispatchToProps(dispatch){
    return {
        retrieveStudentProfile: nuid => {
            dispatch(retrieveStudentProfile(nuid));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileModals);
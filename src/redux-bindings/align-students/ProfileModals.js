import {connect} from 'react-redux';
import ProfileModals from '../../components/align-student/profile-modals/ProfileModals';

function mapStateToProps(state){
    return {
        studentProfiles: state.alignStudent.studentProfiles
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileModals);
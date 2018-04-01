import {connect} from 'react-redux';
import StudentProfileModal from './StudentProfileModal';
import {closeStudentProfileModal} from "../actions/align-students-actions";

function mapStateToProps(state){
    return {
        modalOpened: state.studentProfileModalOpened
    };
}

function mapDispatchToProps(dispatch){
    return {
        onCloseButtonClick: () => dispatch(closeStudentProfileModal())
    };
}

const StudentProfileModalContainer = connect(mapStateToProps,mapDispatchToProps)(StudentProfileModal);
export default StudentProfileModalContainer;


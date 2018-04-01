import {connect} from 'react-redux';
import StudentTable from './StudentTable';
import {openStudentProfileModal} from "../actions/align-students-actions";

const mapStateToProps = state => {
    return {
        students: state.students
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStudentClick: (e) => {
            e.preventDefault();
            dispatch(openStudentProfileModal());
        }
    };
};

const StudentTableContainer = connect(mapStateToProps,mapDispatchToProps)(StudentTable);
export default StudentTableContainer;
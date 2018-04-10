import StudentHeading from '../../components/align-student/heading/Heading';
import {connect} from 'react-redux';
import {applyStudentFilters} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        studentFilters: state.alignStudent.students.studentFilters,
        token: state.login.token
    };
}

function mapDispatchToProps(dispatch){
    return {
        applyFilters: (studentFilters,token,page) => {
            dispatch(applyStudentFilters(studentFilters,token,page));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentHeading);
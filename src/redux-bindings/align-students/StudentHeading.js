import StudentHeading from '../../components/align-student/heading/RootComponent';
import {connect} from 'react-redux';
import {openEditStudentFilterModal,applyStudentFilters} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        studentFilters: state.alignStudent.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {
        applyFilters: studentFilters => {
            dispatch(applyStudentFilters(studentFilters));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentHeading);
import StudentTable from '../../components/align-student/table/RootComponent';
import {connect} from 'react-redux';
import {acceptRetrievalFailure, applyStudentFilters} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        students: state.alignStudent.students.items,
        studentRetrievalStatus: state.alignStudent.students.retrievalStatus,
        failedAttempt: state.alignStudent.failedAttempt,
        pagination: state.alignStudent.pagination,
        studentFilters: state.alignStudent.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {
        acceptRetrievalFailure: () => {
            dispatch(acceptRetrievalFailure());
        },
        applyFilters: studentFilters => {
            dispatch(applyStudentFilters(studentFilters));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentTable);
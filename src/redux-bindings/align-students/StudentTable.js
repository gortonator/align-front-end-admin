import StudentTable from '../../components/align-student/table/Table';
import {connect} from 'react-redux';
import {acceptStudentRetrievalFailure, applyStudentFilters} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        students: state.alignStudent.students.items,
        studentRetrievalStatus: state.alignStudent.students.retrievalStatus,
        failedStudentRetrieval: state.alignStudent.students.failedStudentRetrieval,
        pagination: state.alignStudent.students.pagination,
        studentFilters: state.alignStudent.students.studentFilters,
        token: state.alignStudent.token
    };
}

function mapDispatchToProps(dispatch){
    return {
        acceptRetrievalFailure: () => {
            dispatch(acceptStudentRetrievalFailure());
        },
        applyFilters: (studentFilters,token,page) => {
            dispatch(applyStudentFilters(studentFilters,token,page));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentTable);
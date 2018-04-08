import FilterModal from '../../components/align-student/filter-modal/FilterModal';
import {connect} from 'react-redux';
import {applyStudentFilters} from '../../actions/align-students-actions';

function mapStateToProps(state){
    return {
        studentFilters: state.alignStudent.students.studentFilters,
        token: state.alignStudent.token
    };
}

function mapDispatchToProps(dispatch){
    return {
        applyFilters: (studentFilters,token) => {
            dispatch(applyStudentFilters(studentFilters,token,1));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterModal);

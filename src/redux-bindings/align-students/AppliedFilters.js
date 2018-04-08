import AppliedFilters from '../../components/align-student/applied-filters/AppliedFilters';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        studentRetrieval: state.alignStudent.students.retrievalStatus,
        studentFilters: state.alignStudent.students.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppliedFilters);
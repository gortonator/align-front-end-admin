import AppliedFilters from '../../components/align-student/applied-filters/RootComponent';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        studentRetrieval: state.alignStudent.students.retrievalStatus,
        studentFilters: state.alignStudent.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppliedFilters);
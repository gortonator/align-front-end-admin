import AppliedFilters from '../../components/align-student/applied-filters/RootComponent';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        studentRetrieval: 'SUCCESS',
        studentFilters: state.alignStudent.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(AppliedFilters);
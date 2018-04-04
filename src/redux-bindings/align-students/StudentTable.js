import StudentTable from '../../react-components/align-student/student-table/RootComponent';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        students: state.alignStudent.students
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentTable);
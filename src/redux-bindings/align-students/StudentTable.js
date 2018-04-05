import StudentTable from '../../components/align-student/student-table/RootComponent';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        students: state.alignStudent.students.items
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentTable);
import StudentFilterBar from '../../components/align-students/StudentFilterBar';
import {connect} from 'react-redux';
import {openEditStudentFilterModal} from "../../actions/align-student-actions";

function mapStateToProps(state){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        onAddFilterButtonClick: e => {
            e.preventDefault();
            dispatch(openEditStudentFilterModal());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentFilterBar);
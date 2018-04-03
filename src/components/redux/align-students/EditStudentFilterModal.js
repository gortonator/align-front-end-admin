import EditStudentFilterModal from '../../react/align-student/edit-student-filter-modal/RootComponent';
import {connect} from 'react-redux';
import {closeEditStudentFilterModal} from '../../../actions/align-students-actions';

function mapStateToProps(state){
    return {
        studentFilters: state.alignStudent.studentFilters,
        editStudentFilterModal: state.alignStudent.editStudentFilterModal
    };
}

function mapDispatchToProps(dispatch){
    return {
        onApplyButtonClick: filters => {
            console.log('ok');
        },
        onCloseModalButtonClick: () => {
            dispatch(closeEditStudentFilterModal());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditStudentFilterModal);
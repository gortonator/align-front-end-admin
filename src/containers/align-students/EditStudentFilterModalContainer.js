import EditStudentFilterModal from '../../components/align-students/EditStudentFilterModal';
import {connect} from 'react-redux';
import {closeEditStudentFilterModal} from '../../actions/align-student-actions';

function mapStateToProps(state){
    return {
        studentFilters: state.students.studentFilters,
        editStudentFilterModal: state.students.editStudentFilterModal
    };
}

function mapDispatchToProps(dispatch){
    return {
        onApplyButtonClick: e => {
            e.preventDefault();
            dispatch();
        },
        closeModal: () => {
            dispatch(closeEditStudentFilterModal());
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditStudentFilterModal);
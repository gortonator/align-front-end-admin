import {connect} from 'react-redux';
import SearchBox from '../react-components/align-student/student-heading/StudentSearch';
import {setNameOrIdFilter} from "../actions/align-students-actions";

const mapStateToProps = state => {
    return {
        students: state.students
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchButtonClick: input => {
            dispatch(setNameOrIdFilter(input));
        }
    };
};

const SearchBoxContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBox);
export default SearchBoxContainer;
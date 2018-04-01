import {connect} from 'react-redux';
import SearchBox from '../components/align-students/StudentSearch';
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
import {connect} from 'react-redux';
import StudentTableFilterBar from './StudentTableFilterBar';
import {setCampusFilter,setCoopFilter} from "../actions/align-students-actions";

function mapStateToProps(state){
    return {
        studentFilters: state.studentFilters
    };
}

function mapDispatchToProps(dispatch){
    return {
        onCampusFilterChanged: campus => dispatch(setCampusFilter(campus)),
        onCoopFilterChanged: coop => dispatch(setCoopFilter(coop))
    };
}

const StudentTableFilterBarContainer = connect(mapStateToProps,mapDispatchToProps)(StudentTableFilterBar);
export default StudentTableFilterBarContainer;


import Overview from '../../react/overview/Overview';
import {connect} from 'react-redux';
import {showNuUndergradProportion,showAlignAlumniJobs,showAlignCoops} from "../../../actions/align-students-actions";

function mapStateToProps(state){
    return {

    };
}

function mapDispatchToProps(dispatch){
    return {
        showNuUndergradProportion: () => dispatch(showNuUndergradProportion()),
        showAlignAlumniJobs: () => dispatch(showAlignAlumniJobs()),
        showAlignCoops: () => dispatch(showAlignCoops())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Overview);
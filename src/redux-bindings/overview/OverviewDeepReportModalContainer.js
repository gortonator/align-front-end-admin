import React from 'react';
import {connect} from 'react-redux';
import OverviewDeepReportModal from '../../react-components/overview/OverviewDeepReportModal';
import {closeOverviewDeeperReportModal} from "../../actions/align-students-actions";

function mapStateToProps(state){
    return {
        overviewDeepReport: state.overviewDeepReport
    };
}

function mapDispatchToProps(dispatch){
    return {
        closeOverviewDeepReportModal: () => dispatch(closeOverviewDeeperReportModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OverviewDeepReportModal);
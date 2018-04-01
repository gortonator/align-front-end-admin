import React from 'react';
import OverviewReportItem from './OverviewReportItem';
import OverviewDeeperReportModalContainer from '../../containers/overview/OverviewDeepReportModalContainer';

export default (props) => (
    <div style={theStyle}>
        <h3>Overview</h3>
        <div className={"overview-report"}>
            <OverviewReportItem number={100}
                                issue={"NU undergrads"}
                                explanation={"have enrolled in Align. "}
                                deeperReportDesc={"view proportion"}
                                onDeeperReportRequest={props.showNuUndergradProportion}/>
            <OverviewReportItem number={"2,333,222"}
                                issue={"have cooped"}
                                explanation={"during the time in Align. "}
                                deeperReportDesc={"view coop companies"}
                                onDeeperReportRequest={props.showAlignCoops}/>
            <OverviewReportItem number={191}
                                issue={"have graduated"}
                                explanation={"from Align. "}
                                deeperReportDesc={"view their jobs"}
                                onDeeperReportRequest={props.showAlignAlumniJobs}/>
        </div>
        <OverviewDeeperReportModalContainer/>
    </div>
);

const theStyle = {
    "max-width": "1224px",
    "margin": "auto",
    "padding": "70px 50px"
};